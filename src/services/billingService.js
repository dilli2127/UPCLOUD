// This service simulates a backend API. 
// Later, you replace these functions with real 'fetch' calls to your server.

const FULL_DB_DATA = {
  'January 2026': [
    { id: 101, date: "2026-01-12", resource: "All resources", charge: "€1.55800", description: "Total resources" },
    { id: 102, date: "2026-01-11", resource: "All resources", charge: "€2.21424", description: "Total resources" },
    { id: 103, date: "2026-01-10", resource: "All resources", charge: "€2.21424", description: "Total resources" },
  ],
  'December 2025': [
    { id: 201, date: "2025-12-31", resource: "All resources", charge: "€3.50000", description: "End of year tally" },
    { id: 202, date: "2025-12-15", resource: "Server: App-Prod", charge: "€15.0000", description: "Monthly usage" },
  ],
  // ... maps to the rest of your data
};

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const billingService = {
  
  // GET /api/billing?period=...
  async getBillingData(period) {
    await delay(600); // Fake network loading
    // In a real app: return axios.get(`/api/billing?period=${period}`)
    
    // Check localStorage "database" simulation, or fallback to default
    const db = JSON.parse(localStorage.getItem('simulated_billing_db_v2')) || FULL_DB_DATA;
    return db[period] || [];
  },

  // POST /api/billing/update
  async updateCharge(period, itemId, newCharge) {
    await delay(400); // Fake saving delay
    
    const db = JSON.parse(localStorage.getItem('simulated_billing_db_v2')) || FULL_DB_DATA;
    const periodList = db[period] || [];
    
    // Find and update
    const updatedList = periodList.map(item => 
        item.id === itemId ? { ...item, charge: newCharge } : item
    );
    
    db[period] = updatedList;
    localStorage.setItem('simulated_billing_db_v2', JSON.stringify(db));
    
    return updatedList;
  },

  async getDashboardSummary() {
    await delay(300);
    const db = JSON.parse(localStorage.getItem('simulated_billing_db_v2')) || FULL_DB_DATA;
    
    // Logic to find "Month Usage": Sum charges for the entire latest period
    const latestPeriod = 'January 2026';
    const items = db[latestPeriod] || [];
    
    // Sum all charges for the period
    const totalUsage = items.reduce((sum, i) => sum + (parseFloat(i.charge.replace(/[^0-9.]/g, "")) || 0), 0);

    return {
        dailyUse: `€${totalUsage.toFixed(5)}`, // Using the same key but returning full total with high precision
        balance: "€17.72", 
        exhaustionDate: "20 Jan 2026"
    };
  }
};
