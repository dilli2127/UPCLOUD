import React, { useState, useEffect } from 'react';
import { User, Lock, Shield, CreditCard, Mail } from 'lucide-react';
import { accountService } from '../services/accountService';
import { billingService } from '../services/billingService';
import { Trash2, Download, AlertTriangle, Edit2, PlayCircle } from 'lucide-react';
import './Account.css';

const BillingTabContent = () => {
    const [summary, setSummary] = useState({ dailyUse: 'Loading...', balance: '...', exhaustionDate: '...' });
    
    useEffect(() => {
        billingService.getDashboardSummary().then(setSummary);
    }, []);

    const paymentHistory = [
        { id: '1001145849', date: '25 Dec 2025', deposit: '€50.00', payment: '€50.00', type: 'Manual Payment (credit card)', status: 'Paid' },
        { id: '1001136231', date: '02 Dec 2025', deposit: '€50.00', payment: '€50.00', type: 'Manual Payment (credit card)', status: 'Paid' },
        { id: '1001126586', date: '07 Nov 2025', deposit: '€50.00', payment: '€50.00', type: 'Manual Payment (credit card)', status: 'Paid' },
        { id: '1001117536', date: '14 Oct 2025', deposit: '€50.00', payment: '€50.00', type: 'Manual Payment (credit card)', status: 'Paid' },
        { id: '1001107402', date: '18 Sep 2025', deposit: '€50.00', payment: '€50.00', type: 'Manual Payment (credit card)', status: 'Paid' },
    ];

    const cards = [
        { type: 'Mastercard', last4: '3113', exp: '10/2027', icon: '💳' },
        { type: 'Visa', last4: '6165', exp: '04/2028', icon: '💳' },
        { type: 'Visa', last4: '8176', exp: '05/2029', icon: '💳' },
        { type: 'Visa', last4: '7017', exp: '02/2030', icon: '💳' },
    ];

    return (
        <div className="account-section billing-tab">
            {/* Status Section */}
            <div className="billing-card status-card">
                <div className="card-top-header">
                   <h3><span className="purple-icon-circle"><PlayCircle size={16} /></span> Status</h3>
                </div>
                <div className="status-grid">
                    <div className="status-col">
                        <label>CURRENT BALANCE</label>
                        <div className="status-val big-purple">{summary.balance}</div>
                    </div>
                    <div className="status-col">
                        <label>DAILY USE</label>
                        <div className="status-val">{summary.dailyUse}</div>
                        <div className="mini-chart-mock"></div>
                        <div className="month-labels"><span>Nov</span><span>Dec</span><span>Jan</span></div>
                    </div>
                    <div className="status-col">
                        <label>ESTIMATED BALANCE EXHAUSTION DATE</label>
                        <div className="status-val">{summary.exhaustionDate}</div>
                    </div>
                </div>
                <div className="status-footer">
                    <span>Last payment was <strong>€50.00</strong> on <strong>25 Dec 2025</strong>.</span>
                    <button className="btn-text-icon"><Download size={14} /> Download invoice</button>
                </div>
            </div>

            <h2 className="section-heading-mt">Payment options</h2>
            <div className="billing-card payment-options-wrapper">
                 <div className="payment-warning">
                    <AlertTriangle size={18} color="#f59e0b" />
                    <div>
                        <strong>Your automated payment minimum balance might be too low</strong>
                        <p>We recommend setting it to cover at least 7 days of usage (€20.00) to help avoid insufficient funds.</p>
                    </div>
                 </div>

                 <div className="options-grid">
                    <div className="opt-col border-right">
                        <div className="opt-header">
                            <h3>Automated payment</h3>
                            <button className="btn-outline-sm"><Edit2 size={12} /> EDIT</button>
                        </div>
                        <div className="paused-warning">
                            <span>Payments are currently paused</span>
                            <button className="btn-resume">RESUME</button>
                        </div>
                        <p className="opt-desc">When balance is below <strong>€10.00</strong>, automatically top up <strong>$12.00</strong></p>
                        <div className="opt-card-row">
                             <div className="card-icon-dark">Mastercard</div>
                             <span>****3113</span>
                             <span className="exp-date">10 / 2027</span>
                        </div>
                        <div className="opt-total-row">
                            <span>Total amount to pay</span>
                            <div className="text-right">
                                <strong>$12.00</strong>
                                <div className="vat-sub">incl. VAT 0.00%</div>
                            </div>
                        </div>
                    </div>

                    <div className="opt-col">
                         <h3>One-time payment</h3>
                         <p className="opt-desc">Manually top up your account balance as needed by making a one-time payment.</p>
                         <button className="btn-purple-wide">Make a payment</button>
                    </div>
                 </div>
            </div>

            <h2 className="section-heading-mt">Saved credit cards</h2>
            <div className="billing-card saved-cards-list">
                {cards.map((card, idx) => (
                    <div className="saved-card-row" key={idx}>
                         <div className="card-row-left">
                            <span className="card-type-icon">{card.icon}</span>
                            <strong>{card.type} ending in {card.last4}</strong>
                         </div>
                         <div className="card-row-right">
                            <span className="exp-text">Expires on {card.exp}</span>
                            <button className="btn-icon-trash"><Trash2 size={16} /></button>
                         </div>
                    </div>
                ))}
                <div className="show-more-link">Show more</div>
            </div>

            <div className="history-header">
                <h2 className="section-heading-mt">Payment history</h2>
                <div className="filter-link">ALL ▼</div>
            </div>
            
            <div className="billing-card history-table-card">
                 <table className="history-table">
                    <thead>
                        <tr>
                            <th>Invoice Number</th>
                            <th>Date</th>
                            <th>Deposit</th>
                            <th>Payment</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map(row => (
                            <tr key={row.id}>
                                <td className="text-gray">{row.id}</td>
                                <td>{row.date}</td>
                                <td>{row.deposit}</td>
                                <td>{row.payment}</td>
                                <td>{row.type}</td>
                                <td><span className="status-badge paid">{row.status}</span></td>
                                <td><button className="btn-icon-dl"><Download size={14} /></button></td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
            </div>

        </div>
    );
};

const Account = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [profile, setProfile] = useState({
        username: '', firstName: '', lastName: '', email: '', phone: '', lastPasswordChange: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await accountService.getProfile();
                setProfile(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadProfile();
    }, []);

    const handleChange = (field, value) => {
        setProfile(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await accountService.updateProfile(profile);
            alert("Profile saved successfully!"); 
        } catch (err) {
            alert("Failed to save profile.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div style={{padding: '40px'}}>Loading account details...</div>;

    return (
        <div className="account-page">
            <div className="account-header">
                <div className="account-title">
                    <div className="icon-box-purple">
                        <User size={24} color="#7b00ff" />
                    </div>
                    <h1>Account</h1>
                </div>

                <div className="account-tabs">
                    <div 
                        className={`account-tab ${activeTab === 'general' ? 'active' : ''}`}
                        onClick={() => setActiveTab('general')}
                    >
                        General
                    </div>
                    <div 
                        className={`account-tab ${activeTab === 'billing' ? 'active' : ''}`}
                        onClick={() => setActiveTab('billing')}
                    >
                        Billing details
                    </div>
                </div>
            </div>

            <div className="account-content">
                {activeTab === 'general' && (
                    <div className="account-section">
                        <h2 className="section-heading">Contact details</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Username</label>
                                <input 
                                    type="text" 
                                    value={profile.username} 
                                    disabled 
                                    className="input-field disabled" 
                                />
                            </div>
                            <div className="form-group">
                                <label>First name</label>
                                <input 
                                    type="text" 
                                    value={profile.firstName} 
                                    onChange={(e) => handleChange('firstName', e.target.value)}
                                    className="input-field" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input 
                                    type="text" 
                                    value={profile.lastName} 
                                    onChange={(e) => handleChange('lastName', e.target.value)}
                                    className="input-field" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    value={profile.email} 
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className="input-field" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone number</label>
                                <input 
                                    type="tel" 
                                    value={profile.phone} 
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    className="input-field" 
                                />
                            </div>
                        </div>
                        <button className="btn-save" onClick={handleSave} disabled={saving}>
                            {saving ? 'Saving...' : 'Save changes'}
                        </button>

                        <div className="divider"></div>

                        <h2 className="section-heading">Security</h2>
                        <div className="security-item">
                            <div className="sec-info">
                                <div className="sec-title"><Lock size={18} /> Password</div>
                                <div className="sec-desc">Last changed {profile.lastPasswordChange}</div>
                            </div>
                            <button className="btn-secondary">Change password</button>
                        </div>
                        <div className="security-item">
                             <div className="sec-info">
                                <div className="sec-title"><Shield size={18} /> Two-factor authentication</div>
                                <div className="sec-desc">Add an extra layer of security to your account.</div>
                            </div>
                            <button className="btn-secondary">Setup 2FA</button>
                        </div>
                    </div>
                )}

                {activeTab === 'billing' && (
                    <BillingTabContent />
                )}
            </div>
        </div>
    );
};

export default Account;
