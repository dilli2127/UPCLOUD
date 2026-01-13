const DEFAULT_PROFILE = {
  username: "naduvantech", // Read-only usually
  firstName: "Vignesh",
  lastName: "G",
  email: "vignesh@naduvan.com",
  phone: "+91 9876543210",
  lastPasswordChange: "3 months ago"
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const accountService = {
  async getProfile() {
    await delay(300);
    const saved = localStorage.getItem('upcloud_user_profile');
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  },

  async updateProfile(newProfile) {
    await delay(500); // Simulate network save
    const merged = { ...DEFAULT_PROFILE, ...newProfile };
    localStorage.setItem('upcloud_user_profile', JSON.stringify(merged));
    return merged;
  }
};
