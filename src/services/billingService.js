// This service simulates a backend API. 
// Later, you replace these functions with real 'fetch' calls to your server.

const FULL_DB_DATA = {
  'January 2026': [
    { id: 101, invoiceNumber: "Pending", date: "14 Jan 2026", resource: "All resources", charge: "$8,400.00", description: "Pending Bill (Current Usage)" },
  ],
  'December 2025': [
    { id: 201, invoiceNumber: "1001160500", date: "31 Dec 2025", resource: "Total Bill", charge: "$10,080.00", description: "December Invoice" },
  ],
  'November 2025': [
    { id: 301, invoiceNumber: "1001128900", date: "30 Nov 2025", resource: "Total Bill", charge: "$3,360.00", description: "November Invoice" },
  ],
  'October 2025': [
    { id: 401, invoiceNumber: "1001115400", date: "31 Oct 2025", resource: "Total Bill", charge: "$3,240.00", description: "October Invoice" },
  ],
  'September 2025': [
    { id: 501, invoiceNumber: "1001092000", date: "30 Sep 2025", resource: "Total Bill", charge: "$3,600.00", description: "September Invoice" },
  ],
  'August 2025': [
    { id: 601, invoiceNumber: "1001081000", date: "31 Aug 2025", resource: "Total Bill", charge: "$2,400.00", description: "August Invoice" },
  ],
  'July 2025': [
    { id: 701, invoiceNumber: "1001075000", date: "31 Jul 2025", resource: "Total Bill", charge: "$3,000.00", description: "July Invoice" },
  ],
  'June 2025': [
    { id: 801, invoiceNumber: "1001062000", date: "30 Jun 2025", resource: "Total Bill", charge: "$2,640.00", description: "June Invoice" },
  ],
  'May 2025': [
    { id: 901, invoiceNumber: "1001053000", date: "31 May 2025", resource: "Total Bill", charge: "$3,480.00", description: "May Invoice" },
  ],
  'April 2025': [
    { id: 1001, invoiceNumber: "1001041000", date: "30 Apr 2025", resource: "Total Bill", charge: "$2,520.00", description: "April Invoice" },
  ],
  'March 2025': [
    { id: 1101, invoiceNumber: "1001032000", date: "31 Mar 2025", resource: "Total Bill", charge: "$3,120.00", description: "March Invoice" },
  ],
  'February 2025': [
    { id: 1201, invoiceNumber: "1001021000", date: "28 Feb 2025", resource: "Total Bill", charge: "$2,760.00", description: "February Invoice" },
  ],
  'January 2025': [
    { id: 1301, invoiceNumber: "1001010500", date: "31 Jan 2025", resource: "Total Bill", charge: "$2,400.00", description: "January Invoice" },
  ],
  'December 2024': [
    { id: 1401, invoiceNumber: "1000998124", date: "31 Dec 2024", resource: "Total Bill", charge: "$2,250.00", description: "December Invoice" },
  ],
  'November 2024': [
    { id: 1501, invoiceNumber: "1000987654", date: "30 Nov 2024", resource: "Total Bill", charge: "$2,100.00", description: "November Invoice" },
  ],
  'October 2024': [
    { id: 1601, invoiceNumber: "1000976543", date: "31 Oct 2024", resource: "Total Bill", charge: "$2,300.00", description: "October Invoice" },
  ],
  'September 2024': [
    { id: 1701, invoiceNumber: "1000965432", date: "30 Sep 2024", resource: "Total Bill", charge: "$2,150.00", description: "September Invoice" },
  ],
  'August 2024': [
    { id: 1801, invoiceNumber: "1000954321", date: "31 Aug 2024", resource: "Total Bill", charge: "$2,000.00", description: "August Invoice" },
  ],
  'July 2024': [
    { id: 1901, invoiceNumber: "1000943210", date: "31 Jul 2024", resource: "Total Bill", charge: "$2,200.00", description: "July Invoice" },
  ]
};

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const PAYMENT_HISTORY_DATA = [
    { invoice: "1001160500", date: "01 Jan 2026", deposit: "$10,080.00", payment: "$10,080.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001128900", date: "01 Dec 2025", deposit: "$3,360.00", payment: "$3,360.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001115400", date: "01 Nov 2025", deposit: "$3,240.00", payment: "$3,240.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001092000", date: "01 Oct 2025", deposit: "$3,600.00", payment: "$3,600.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001081000", date: "01 Sep 2025", deposit: "$2,400.00", payment: "$2,400.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001075000", date: "01 Aug 2025", deposit: "$3,000.00", payment: "$3,000.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001062000", date: "01 Jul 2025", deposit: "$2,640.00", payment: "$2,640.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001053000", date: "01 Jun 2025", deposit: "$3,480.00", payment: "$3,480.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001041000", date: "01 May 2025", deposit: "$2,520.00", payment: "$2,520.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001032000", date: "01 Apr 2025", deposit: "$3,120.00", payment: "$3,120.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001021000", date: "01 Mar 2025", deposit: "$2,760.00", payment: "$2,760.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1001010500", date: "01 Feb 2025", deposit: "$2,400.00", payment: "$2,400.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    // 2024 Data
    { invoice: "1000998124", date: "01 Jan 2025", deposit: "$2,250.00", payment: "$2,250.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1000987654", date: "01 Dec 2024", deposit: "$2,100.00", payment: "$2,100.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1000976543", date: "01 Nov 2024", deposit: "$2,300.00", payment: "$2,300.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1000965432", date: "01 Oct 2024", deposit: "$2,150.00", payment: "$2,150.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1000954321", date: "01 Sep 2024", deposit: "$2,000.00", payment: "$2,000.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
    { invoice: "1000943210", date: "01 Aug 2024", deposit: "$2,200.00", payment: "$2,200.00", type: "Manual Payment (Bank Transfer)", status: "Paid" },
];

export const billingService = {
  
  // GET /api/billing?period=...
  async getBillingData(period) {
    await delay(600); // Fake network loading
    // In a real app: return axios.get(`/api/billing?period=${period}`)
    
    // Check localStorage "database" simulation, or fallback to default
    const db = JSON.parse(localStorage.getItem('simulated_billing_db_v3')) || FULL_DB_DATA;
    return db[period] || [];
  },

  // GET /api/payment-history
  async getPaymentHistory() {
      await delay(400);
      return PAYMENT_HISTORY_DATA;
  },

  // POST /api/billing/update
  async updateCharge(period, itemId, newCharge) {
    await delay(400); // Fake saving delay
    
    const db = JSON.parse(localStorage.getItem('simulated_billing_db_v3')) || FULL_DB_DATA;
    const periodList = db[period] || [];
    
    // Find and update
    const updatedList = periodList.map(item => 
        item.id === itemId ? { ...item, charge: newCharge } : item
    );
    
    db[period] = updatedList;
    localStorage.setItem('simulated_billing_db_v3', JSON.stringify(db));
    
    return updatedList;
  },

  async getDashboardSummary() {
    await delay(300);
    // User requested realistic billing based on current usage
    // Also derive last payment info from history
    const lastPayment = PAYMENT_HISTORY_DATA[0];
    return {
        dailyUse: "$600.00", // Avg ($8400 / 14 days)
        balance: "$8,400.00",  // Current pending jan invoice
        exhaustionDate: "Running Account",
        lastPaymentAmount: lastPayment.payment,
        lastPaymentDate: lastPayment.date
    };
  }
};
