import React from 'react';
import { Shield, Brain, Sparkles, Ruler, FlaskConical } from 'lucide-react';
import '../styles/MainComponent.css';

export function MainComponent(props) {
    const {
        isFullTab,
        onToggleFullTab,
        onCodeReloadRequest,
        onRunTests,
        ControlsMenu
    } = props;

    return (
        <div className="datacore-premium-hub">
            {/* Embedded Controls Menu (if provided by legacy bridge) */}
            {ControlsMenu && (
                <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 100 }}>
                    <ControlsMenu
                        onReload={onCodeReloadRequest}
                        isFullTab={isFullTab}
                        onToggleFullTab={onToggleFullTab}
                        onRunTests={onRunTests}
                    />
                </div>
            )}

            <div className="hub-header">
                <div className="hub-title-group">
                    <h1>Datacore Hub OS</h1>
                    <p>Foundational Design System & High-Performance View Factory</p>
                </div>
                <div className="status-badge">
                    <div className="status-indicator"></div>
                    System Nominal
                </div>
            </div>

            <div className="hub-grid">
                {/* Architecture Cards */}
                <div className="glass-card span-4">
                    <div className="card-icon"><Shield size={24} /></div>
                    <h3>Safe Agent Watchdog</h3>
                    <p>Autonomous monitoring active. Capable of executing out-of-band recovery commands if the React tree encounters a fatal exception.</p>
                </div>

                <div className="glass-card span-4">
                    <div className="card-icon"><Brain size={24} /></div>
                    <h3>MCP Neural Bridge</h3>
                    <p>Agentic control pathway established. The AI can read and write internal component state in real-time via the host environment.</p>
                </div>

                <div className="glass-card span-4">
                    <div className="card-icon"><Sparkles size={24} /></div>
                    <h3>Premium Glassmorphism</h3>
                    <p>Dynamic backdrop filters, subtle micro-animations, and Deep Space gradients. This establishes the aesthetic baseline for all future components.</p>
                </div>

                <div className="glass-card span-6">
                    <div className="card-icon"><Ruler size={24} /></div>
                    <h3>Responsive Layout</h3>
                    <p>Built on a liquid 12-column grid. Automatically adapts from Mobile (1 column) to Tablet (2 columns) to Desktop (3+ columns).</p>
                    <button className="hub-action-btn" onClick={onToggleFullTab}>
                        Toggle Portal Mode
                    </button>
                </div>

                <div className="glass-card span-6">
                    <div className="card-icon"><FlaskConical size={24} /></div>
                    <h3>ASTP Integration</h3>
                    <p>The Automated Datacore Testing Pipeline is active. Components can be hot-reloaded and verified by the testing subagent automatically.</p>
                    <button className="hub-action-btn" onClick={onCodeReloadRequest}>
                        Force Hot Reload
                    </button>
                </div>
            </div>
        </div>
    );
}

// Fallback for legacy dynamic require
export default { MainComponent };
