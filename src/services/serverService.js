import serverDataList from '../data/servers.json';

// Initialize localStorage with default data if empty
if (!localStorage.getItem('upcloud_servers_db')) {
    localStorage.setItem('upcloud_servers_db', JSON.stringify(serverDataList));
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const serverService = {
    async getServers() {
        await delay(300);
        return JSON.parse(localStorage.getItem('upcloud_servers_db')) || [];
    },

    async getServerById(id) {
        await delay(200);
        const servers = JSON.parse(localStorage.getItem('upcloud_servers_db')) || [];
        // Ensure accurate string comparison for ID
        return servers.find(s => s.id.toString() === id.toString());
    },

    async createServer(config) {
        await delay(800); // Simulate provisioning time
        const servers = JSON.parse(localStorage.getItem('upcloud_servers_db')) || [];
        
        // Generate new ID (max + 1)
        const newId = servers.length > 0 ? Math.max(...servers.map(s => parseInt(s.id))) + 1 : 1;
        
        const newServer = {
            id: newId,
            name: config.hostname || `Server-${newId}`,
            status: 'running', // New servers start running usually
            os: config.osName || 'Ubuntu 22.04',
            ip: `10.0.0.${newId + 10}`, // Mock IP
            location: config.locationName || 'Frankfurt',
            cpu: config.plan?.cpu || '1 CPU',
            memory: config.plan?.ram || '1 GB',
            storage: config.plan?.storage || '25 GB'
        };

        const updatedServers = [...servers, newServer];
        localStorage.setItem('upcloud_servers_db', JSON.stringify(updatedServers));
        return newServer;
    },

    async deleteServer(id) {
        await delay(500);
        const servers = JSON.parse(localStorage.getItem('upcloud_servers_db')) || [];
        const filtered = servers.filter(s => s.id.toString() !== id.toString());
        localStorage.setItem('upcloud_servers_db', JSON.stringify(filtered));
        return true;
    },

    async updateServerStatus(id, status) {
        await delay(300);
        const servers = JSON.parse(localStorage.getItem('upcloud_servers_db')) || [];
        const updated = servers.map(s => {
            if (s.id.toString() === id.toString()) {
                return { ...s, status: status };
            }
            return s;
        });
        localStorage.setItem('upcloud_servers_db', JSON.stringify(updated));
        return updated.find(s => s.id.toString() === id.toString());
    }
};
