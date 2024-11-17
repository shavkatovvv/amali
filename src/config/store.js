export function loadState(key) {
    try {
        const serializedState = localStorage.getItem(key);

        if (!serializedState) return undefined;

        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
}

export function saveState(key, state) {
    try {
        const existingState = loadState(key) || []; // Load existing state
        const updatedState = [...existingState, state]; // Append new state
        const serializedState = JSON.stringify(updatedState);

        localStorage.setItem(key, serializedState);
    } catch (e) {
        console.error("Error saving state:", e);
    }
}

export function removeState(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) {}
}
