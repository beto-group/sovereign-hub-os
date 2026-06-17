import React from 'react';
import { createRoot } from 'react-dom/client';
import { View } from './index';

export async function mount_app(container, platformAPI) {
    const root = createRoot(container);
    // Provide a mock Datacore 'dc' context to the legacy View
    const dc = platformAPI.legacyDc || {
        useState: React.useState,
        useEffect: React.useEffect,
        useMemo: React.useMemo,
        useCallback: React.useCallback,
        useRef: React.useRef,
        useQuery: () => [],
        app: platformAPI.app || {},
    };

    // Inject dc into the global window scope so legacy index.jsx can find it!
    window.dc = dc;

    root.render(<View dc={dc} folderPath={platformAPI.folderPath || ""} platformAPI={platformAPI} />);
    
    return function cleanup() {
        // ALWAYS unmount the React root to prevent memory leaks
        root.unmount();
    };
}
