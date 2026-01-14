import React, { useState, useEffect } from 'react';
import { User, Lock, Shield } from 'lucide-react';
import { accountService } from '../services/accountService';
import UsageBillingLog from './UsageBillingLog';
import './Account.css';

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

            <div className={`account-content ${activeTab === 'billing' ? 'wide-content' : ''}`}>
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
                    <UsageBillingLog />
                )}
            </div>
        </div>
    );
};

export default Account;
