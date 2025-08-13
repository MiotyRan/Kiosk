/**
 * Configuration Centrale - Kiosque McDonald's
 * Brasserie Claouey v1.0.0
 * 
 * Basé sur config-js-final.js mais adapté pour le kiosque
 */

const CONFIG = {
    // ===== URLS & ENDPOINTS =====
    API_URL: 'http://37.59.104.101:8001', // URL DE VOTRE API RÉELLE
    WS_URL: 'ws://37.59.104.101:8001',
    
    // URLs spécifiques kiosque - ENDPOINTS RÉELS
    ENDPOINTS: {
        // Catalogue (ENDPOINTS RÉELS DE VOTRE API)
        MENU_COMPLETE: '/api/public/menu',           // Recommandé - tout en une fois
        CATEGORIES: '/api/public/categories',         // Navigation seulement
        PRODUCTS: '/api/public/products',            // Produits seulement
        
        // Commandes
        CREATE_ORDER: '/api/orders',
        GET_ORDER: '/api/orders/{id}',
        ORDER_HISTORY: '/api/orders',
        
        // Paiements
        PAYMENT_CASH: '/api/payments/cash',
        PAYMENT_CARD: '/api/payments/card',
        
        // Utilitaires
        STATS: '/api/stats',
        CONFIG_PUBLIC: '/api/config/public',
        HEALTH: '/health'
    },
    
    // ===== APPLICATION =====
    APP: {
        NAME: 'Brasserie Claouey',
        VERSION: '1.0.0',
        KIOSK_ID: 'brasserie_claouey_kiosk_001',
        ENVIRONMENT: 'production',
        LANGUAGE: 'fr-FR',
        TIMEZONE: 'Europe/Paris'
    },
    
    // ===== BUSINESS RULES =====
    BUSINESS: {
        CURRENCY: 'EUR',
        CURRENCY_SYMBOL: '€',
        TVA_RATE: 0.20,  // 20%
        ORDER_PREFIX: 'BC',
        MIN_ORDER_AMOUNT: 0.01,
        MAX_ORDER_AMOUNT: 999.99,
        MAX_ITEMS_PER_ORDER: 50,
        MAX_QUANTITY_PER_ITEM: 20,
        TABLE_NUMBERS: Array.from({length: 20}, (_, i) => i + 1) // Tables 1-20
    },
    
    // ===== TIMING & INTERVALS =====
    TIMING: {
        // Auto-refresh des données
        CATALOG_REFRESH: 300000,       // 5 minutes
        ORDER_STATUS_REFRESH: 10000,   // 10 secondes
        
        // Sessions & Timeouts
        SESSION_TIMEOUT: 1800000,      // 30 minutes
        INACTIVITY_WARNING: 300000,    // 5 minutes avant reset
        AUTO_RESET_DELAY: 30000,       // 30 secondes après succès
        
        // UI
        TOAST_DURATION: 5000,          // 5 secondes
        ANIMATION_DURATION: 300,       // 0.3 secondes
        PROCESSING_TIMEOUT: 60000,     // 1 minute max pour traitement
        
        // Cache
        CACHE_TTL: 600000,             // 10 minutes
    },
    
    // ===== FEATURES FLAGS =====
    FEATURES: {
        // Core kiosque
        service_mode_selection: true,
        table_selection: true,
        allergen_management: true,
        product_customization: true,
        
        // Paiements
        cash_payment: true,
        card_payment: true,
        viva_integration: true,
        
        // UI/UX
        animations: true,
        sound_feedback: false,  // Désactivé sur kiosque public
        auto_reset: true,
        progress_indicator: true,
        
        // Intégrations
        hiboutik_sync: true,
        ticket_printing: true,
        kitchen_printing: true,
        email_receipt: true,
        
        // Debug
        debug_mode: false,
        mock_payments: false
    },
    
    // ===== UI CONFIGURATION =====
    UI: {
        // Couleurs McDonald's
        COLORS: {
            PRIMARY: '#DA020E',      // Rouge McDonald's
            SECONDARY: '#FFC72C',    // Jaune McDonald's
            SUCCESS: '#27AE60',      // Vert
            WARNING: '#F39C12',      // Orange
            ERROR: '#E74C3C',        // Rouge erreur
            INFO: '#3498DB'          // Bleu info
        },
        
        // Layout optimisé 22 pouces
        SCREEN: {
            TARGET_SIZE: '22_inch',
            RESOLUTION: '1920x1080',
            FONT_SIZE_BASE: '18px',
            BUTTON_MIN_HEIGHT: '80px',
            TOUCH_TARGET_MIN: '44px'
        },
        
        // Animations
        ANIMATION: {
            DURATION: '300ms',
            EASING: 'ease-out',
            SLIDE_DISTANCE: '20px'
        }
    },
    
    // ===== ALLERGÈNES (14 obligatoires UE) =====
    ALLERGENS: {
        1: { code: 'GLU', name: 'Gluten', icon: '🌾' },
        2: { code: 'CRU', name: 'Crustacés', icon: '🦐' },
        3: { code: 'EGG', name: 'Œufs', icon: '🥚' },
        4: { code: 'FSH', name: 'Poisson', icon: '🐟' },
        5: { code: 'PNT', name: 'Arachides', icon: '🥜' },
        6: { code: 'SOY', name: 'Soja', icon: '🌱' },
        7: { code: 'MLK', name: 'Lait', icon: '🥛' },
        8: { code: 'NUT', name: 'Fruits à coque', icon: '🌰' },
        9: { code: 'CEL', name: 'Céleri', icon: '🥬' },
        10: { code: 'MUS', name: 'Moutarde', icon: '🟡' },
        11: { code: 'SES', name: 'Graines de sésame', icon: '⚪' },
        12: { code: 'SUL', name: 'Sulfites', icon: '🧪' },
        13: { code: 'LUP', name: 'Lupin', icon: '🌿' },
        14: { code: 'MOL', name: 'Mollusques', icon: '🦪' }
    },
    
    // ===== VALIDATION RULES =====
    VALIDATION: {
        CUSTOMER_NAME_MIN_LENGTH: 1,
        CUSTOMER_NAME_MAX_LENGTH: 100,
        PHONE_REGEX: /^(\+33|0)[1-9](\d{2}){4}$/,
        EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        SPECIAL_INSTRUCTIONS_MAX_LENGTH: 500
    },
    
    // ===== MESSAGES =====
    MESSAGES: {
        SUCCESS: {
            ORDER_CREATED: 'Commande créée avec succès !',
            PAYMENT_COMPLETED: 'Paiement confirmé',
            PRODUCT_ADDED: '{product} ajouté au panier',
            ALLERGENS_FILTERED: '{count} produits adaptés à vos allergies'
        },
        
        ERROR: {
            NETWORK: 'Erreur de connexion au serveur',
            ORDER_FAILED: 'Impossible de créer la commande',
            PAYMENT_FAILED: 'Le paiement a échoué',
            CUSTOMER_NAME_REQUIRED: 'Le nom du client est obligatoire',
            CART_EMPTY: 'Le panier est vide',
            TABLE_REQUIRED: 'Numéro de table requis pour le service sur place',
            MAX_ITEMS_REACHED: 'Maximum {max} articles différents',
            MAX_QUANTITY_REACHED: 'Maximum {max} unités par article',
            ALLERGEN_WARNING: 'Ce produit contient: {allergens}'
        },
        
        INFO: {
            SELECT_SERVICE_MODE: 'Comment souhaitez-vous être servi ?',
            SELECT_TABLE: 'Sélectionnez votre table',
            ALLERGEN_QUESTION: 'Avez-vous des allergies ?',
            PAYMENT_PROCESSING: 'Traitement en cours...',
            ORDER_SUCCESS: 'Merci pour votre commande !',
            AUTO_RESET: 'Nouvelle commande dans {seconds} secondes'
        }
    },
    
    // ===== WORKFLOW STEPS =====
    STEPS: {
        SERVICE_MODE: {
            id: 'service-mode',
            title: 'Mode de Service',
            description: 'Choisissez votre mode de service'
        },
        TABLE_SELECTION: {
            id: 'table-selection',
            title: 'Sélection Table',
            description: 'Choisissez votre table'
        },
        ALLERGENS: {
            id: 'allergens',
            title: 'Allergies',
            description: 'Filtrage par allergies (optionnel)'
        },
        MENU: {
            id: 'menu',
            title: 'Sélection',
            description: 'Choisissez vos produits'
        },
        PAYMENT: {
            id: 'payment',
            title: 'Paiement',
            description: 'Finalisation de la commande'
        }
    },
    
    // ===== INTÉGRATIONS =====
    INTEGRATIONS: {
        HIBOUTIK: {
            ENABLED: true,
            STORE_ID: 1,  // FOOD AND BEER
            VENDOR_ID: 0,
            SYNC_TIMEOUT: 30000
        },
        
        VIVA: {
            ENABLED: true,
            TERMINAL_ID: 'TERMINAL_001',
            TIMEOUT: 60000
        },
        
        PRINTER: {
            TICKET_ENABLED: true,
            KITCHEN_ENABLED: true,
            THERMAL_PORT: 'COM3',
            EPSON_IP: '192.168.1.100'
        }
    },
    
    // ===== DEBUG & LOGGING =====
    DEBUG: {
        ENABLED: false,
        LOG_LEVEL: 'info',
        LOG_API_CALLS: false,
        MOCK_DATA: false,
        SHOW_PERFORMANCE: false
    }
};

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Obtenir une valeur de configuration
 * @param {string} path - Chemin (ex: 'BUSINESS.TVA_RATE')
 * @param {*} defaultValue - Valeur par défaut
 */
function getConfig(path, defaultValue = null) {
    const keys = path.split('.');
    let value = CONFIG;
    
    for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            return defaultValue;
        }
    }
    
    return value;
}

/**
 * Vérifier si une feature est activée
 * @param {string} feature - Nom de la feature
 */
function isFeatureEnabled(feature) {
    return getConfig(`FEATURES.${feature}`, false) === true;
}

/**
 * Obtenir l'URL complète d'un endpoint
 * @param {string} endpoint - Nom de l'endpoint
 * @param {object} params - Paramètres à remplacer
 */
function getEndpointUrl(endpoint, params = {}) {
    let url = getConfig(`ENDPOINTS.${endpoint}`, endpoint);
    
    // Remplacer les paramètres dans l'URL
    for (const [key, value] of Object.entries(params)) {
        url = url.replace(`{${key}}`, value);
    }
    
    return getConfig('API_URL') + url;
}

/**
 * Formater un message avec des paramètres
 * @param {string} messageKey - Clé du message (ex: 'SUCCESS.PRODUCT_ADDED')
 * @param {object} params - Paramètres à injecter
 */
function getMessage(messageKey, params = {}) {
    let message = getConfig(`MESSAGES.${messageKey}`, messageKey);
    
    // Remplacer les paramètres {param}
    for (const [key, value] of Object.entries(params)) {
        message = message.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    }
    
    return message;
}

/**
 * Logger avec niveau de debug
 * @param {string} message - Message
 * @param {*} data - Données optionnelles
 * @param {string} level - Niveau (debug, info, warn, error)
 */
function debugLog(message, data = null, level = 'info') {
    if (!getConfig('DEBUG.ENABLED')) return;
    
    const logLevel = getConfig('DEBUG.LOG_LEVEL', 'info');
    const levels = ['debug', 'info', 'warn', 'error'];
    
    if (levels.indexOf(level) >= levels.indexOf(logLevel)) {
        const timestamp = new Date().toISOString();
        console[level](`[${timestamp}] [KIOSK] ${message}`, data || '');
    }
}

/**
 * Calculer les totaux avec TVA
 * @param {Array} items - Items du panier
 */
function calculateTotals(items) {
    const totalTTC = items.reduce((sum, item) => sum + item.total_price, 0);
    const tvaRate = getConfig('BUSINESS.TVA_RATE', 0.20);
    const totalHT = totalTTC / (1 + tvaRate);
    const tvaAmount = totalTTC - totalHT;
    
    return {
        subtotal_ht: Math.round(totalHT * 100) / 100,
        tva_amount: Math.round(tvaAmount * 100) / 100,
        total_ttc: Math.round(totalTTC * 100) / 100
    };
}

/**
 * Valider un email
 * @param {string} email
 */
function isValidEmail(email) {
    if (!email) return true; // Email optionnel
    const regex = getConfig('VALIDATION.EMAIL_REGEX');
    return regex.test(email);
}

/**
 * Valider un téléphone
 * @param {string} phone
 */
function isValidPhone(phone) {
    if (!phone) return true; // Téléphone optionnel
    const regex = getConfig('VALIDATION.PHONE_REGEX');
    return regex.test(phone);
}

/**
 * Formater un prix
 * @param {number} price - Prix en euros
 * @param {string} currency - Devise
 */
function formatPrice(price, currency = null) {
    const curr = currency || getConfig('BUSINESS.CURRENCY_SYMBOL', '€');
    return `${price.toFixed(2)} ${curr}`;
}

/**
 * Générer un ID unique
 */
function generateId() {
    return 'kiosk_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Gérer le stockage local de façon sécurisée
 */
const Storage = {
    set(key, value) {
        try {
            localStorage.setItem(`kiosk_${key}`, JSON.stringify(value));
        } catch (e) {
            debugLog('Erreur localStorage set', e, 'error');
        }
    },
    
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(`kiosk_${key}`);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            debugLog('Erreur localStorage get', e, 'error');
            return defaultValue;
        }
    },
    
    remove(key) {
        try {
            localStorage.removeItem(`kiosk_${key}`);
        } catch (e) {
            debugLog('Erreur localStorage remove', e, 'error');
        }
    },
    
    clear() {
        try {
            // Supprimer seulement les clés kiosque
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('kiosk_')) {
                    localStorage.removeItem(key);
                }
            });
        } catch (e) {
            debugLog('Erreur localStorage clear', e, 'error');
        }
    }
};

/**
 * Utilitaires pour les animations
 */
const Animation = {
    slideIn(element, direction = 'up') {
        if (!element || !isFeatureEnabled('animations')) return;
        
        const distance = getConfig('UI.ANIMATION.SLIDE_DISTANCE', '20px');
        const duration = getConfig('UI.ANIMATION.DURATION', '300ms');
        const easing = getConfig('UI.ANIMATION.EASING', 'ease-out');
        
        const directions = {
            up: `translateY(${distance})`,
            down: `translateY(-${distance})`,
            left: `translateX(${distance})`,
            right: `translateX(-${distance})`
        };
        
        element.style.transform = directions[direction] || directions.up;
        element.style.opacity = '0';
        element.style.transition = `all ${duration} ${easing}`;
        
        // Force reflow
        element.offsetHeight;
        
        element.style.transform = 'translate(0, 0)';
        element.style.opacity = '1';
    },
    
    slideOut(element, direction = 'up', callback = null) {
        if (!element || !isFeatureEnabled('animations')) {
            if (callback) callback();
            return;
        }
        
        const distance = getConfig('UI.ANIMATION.SLIDE_DISTANCE', '20px');
        const duration = getConfig('UI.ANIMATION.DURATION', '300ms');
        const easing = getConfig('UI.ANIMATION.EASING', 'ease-out');
        
        const directions = {
            up: `translateY(-${distance})`,
            down: `translateY(${distance})`,
            left: `translateX(-${distance})`,
            right: `translateX(${distance})`
        };
        
        element.style.transition = `all ${duration} ${easing}`;
        element.style.transform = directions[direction] || directions.up;
        element.style.opacity = '0';
        
        if (callback) {
            setTimeout(callback, parseInt(duration));
        }
    },
    
    pulse(element, iterations = 1) {
        if (!element || !isFeatureEnabled('animations')) return;
        
        element.style.animation = `pulse 0.6s ease-in-out ${iterations}`;
        
        // Supprimer l'animation après
        setTimeout(() => {
            element.style.animation = '';
        }, 600 * iterations);
    },
    
    shake(element) {
        if (!element || !isFeatureEnabled('animations')) return;
        
        element.style.animation = 'shake 0.5s ease-in-out';
        
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }
};

/**
 * Gestionnaire de notifications toast
 */
const Toast = {
    show(message, type = 'info', duration = null) {
        const toastDuration = duration || getConfig('TIMING.TOAST_DURATION', 5000);
        const container = document.getElementById('toast-container') || this.createContainer();
        
        const toast = document.createElement('div');
        toast.className = this.getToastClasses(type);
        toast.innerHTML = this.getToastHTML(message, type);
        
        container.appendChild(toast);
        Animation.slideIn(toast, 'right');
        
        // Auto-remove
        setTimeout(() => {
            Animation.slideOut(toast, 'right', () => {
                if (toast.parentElement) {
                    toast.remove();
                }
            });
        }, toastDuration);
        
        debugLog(`Toast ${type}: ${message}`);
        return toast;
    },
    
    success(message, duration = null) {
        return this.show(message, 'success', duration);
    },
    
    error(message, duration = null) {
        return this.show(message, 'error', duration);
    },
    
    warning(message, duration = null) {
        return this.show(message, 'warning', duration);
    },
    
    info(message, duration = null) {
        return this.show(message, 'info', duration);
    },
    
    createContainer() {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed top-4 right-4 z-50 space-y-2';
        document.body.appendChild(container);
        return container;
    },
    
    getToastClasses(type) {
        const baseClasses = 'px-6 py-3 rounded-lg shadow-lg min-w-80 max-w-96';
        const typeClasses = {
            success: 'bg-green-500 text-white',
            error: 'bg-red-500 text-white',
            warning: 'bg-yellow-500 text-black',
            info: 'bg-blue-500 text-white'
        };
        
        return `${baseClasses} ${typeClasses[type] || typeClasses.info}`;
    },
    
    getToastHTML(message, type) {
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        
        return `
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <span class="text-xl mr-3">${icons[type] || icons.info}</span>
                    <span>${message}</span>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" 
                        class="ml-4 opacity-70 hover:opacity-100">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    }
};

/**
 * API Helper avec gestion d'erreurs et retry
 */
const API = {
    async call(endpoint, options = {}) {
        const url = typeof endpoint === 'string' ? 
            (endpoint.startsWith('http') ? endpoint : getConfig('API_URL') + endpoint) :
            getEndpointUrl(endpoint.name, endpoint.params || {});
        
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            timeout: getConfig('TIMING.PROCESSING_TIMEOUT', 60000)
        };
        
        const finalOptions = { ...defaultOptions, ...options };
        
        debugLog(`API Call: ${finalOptions.method || 'GET'} ${url}`, finalOptions.body ? JSON.parse(finalOptions.body) : null);
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), finalOptions.timeout);
            
            const response = await fetch(url, {
                ...finalOptions,
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new APIError(data.detail || `HTTP ${response.status}`, response.status, data);
            }
            
            debugLog(`API Response: ${response.status}`, data);
            return data;
            
        } catch (error) {
            if (error.name === 'AbortError') {
                throw new APIError('Timeout - La requête a pris trop de temps', 408);
            }
            
            debugLog(`API Error: ${error.message}`, error, 'error');
            
            if (error instanceof APIError) {
                throw error;
            }
            
            throw new APIError(getMessage('ERROR.NETWORK'), 0, error);
        }
    },
    
    async get(endpoint, params = {}) {
        return this.call(endpoint, { method: 'GET', ...params });
    },
    
    async post(endpoint, data, params = {}) {
        return this.call(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            ...params
        });
    },
    
    async put(endpoint, data, params = {}) {
        return this.call(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...params
        });
    },
    
    async delete(endpoint, params = {}) {
        return this.call(endpoint, { method: 'DELETE', ...params });
    }
};

/**
 * Classe d'erreur API personnalisée
 */
class APIError extends Error {
    constructor(message, status = 0, data = null) {
        super(message);
        this.name = 'APIError';
        this.status = status;
        this.data = data;
    }
    
    isNetworkError() {
        return this.status === 0;
    }
    
    isClientError() {
        return this.status >= 400 && this.status < 500;
    }
    
    isServerError() {
        return this.status >= 500;
    }
}

/**
 * Gestionnaire de connexion et statut
 */
const Connection = {
    isOnline: navigator.onLine,
    lastCheck: null,
    checkInterval: null,
    
    init() {
        // Event listeners pour online/offline
        window.addEventListener('online', () => this.setStatus(true));
        window.addEventListener('offline', () => this.setStatus(false));
        
        // Vérification périodique
        this.startPeriodicCheck();
        
        // Vérification initiale
        this.checkStatus();
    },
    
    async checkStatus() {
        try {
            await API.get('/health');
            this.setStatus(true);
        } catch (error) {
            this.setStatus(false);
        }
    },
    
    setStatus(online) {
        const wasOnline = this.isOnline;
        this.isOnline = online;
        this.lastCheck = new Date();
        
        // Mettre à jour l'UI
        this.updateUI();
        
        // Événements de changement de statut
        if (wasOnline !== online) {
            debugLog(`Connexion ${online ? 'rétablie' : 'perdue'}`);
            
            if (online) {
                this.onReconnect();
            } else {
                this.onDisconnect();
            }
        }
    },
    
    updateUI() {
        const indicator = document.getElementById('connection-status');
        if (indicator) {
            indicator.className = this.isOnline ? 
                'bg-green-500 px-3 py-1 rounded-full text-sm text-white' :
                'bg-red-500 px-3 py-1 rounded-full text-sm text-white';
            indicator.innerHTML = this.isOnline ? '🟢 En ligne' : '🔴 Hors ligne';
        }
    },
    
    onReconnect() {
        Toast.success('Connexion rétablie');
        // Synchroniser les données en attente
        this.syncPendingData();
    },
    
    onDisconnect() {
        Toast.error('Connexion perdue - Mode hors ligne');
    },
    
    startPeriodicCheck() {
        this.checkInterval = setInterval(() => {
            this.checkStatus();
        }, 30000); // Toutes les 30 secondes
    },
    
    stopPeriodicCheck() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
        }
    },
    
    async syncPendingData() {
        // TODO: Implémenter la synchronisation des données offline
        debugLog('Synchronisation des données en attente...');
    }
};

/**
 * Gestionnaire de session et auto-reset
 */
const Session = {
    startTime: null,
    lastActivity: null,
    warningShown: false,
    timeouts: {
        warning: null,
        reset: null
    },
    
    init() {
        this.start();
        this.setupActivityListeners();
    },
    
    start() {
        this.startTime = new Date();
        this.lastActivity = new Date();
        this.warningShown = false;
        
        this.clearTimeouts();
        this.setTimeouts();
        
        debugLog('Session démarrée');
    },
    
    setupActivityListeners() {
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
        
        events.forEach(event => {
            document.addEventListener(event, () => this.recordActivity(), { passive: true });
        });
    },
    
    recordActivity() {
        this.lastActivity = new Date();
        this.warningShown = false;
        
        // Reset des timeouts
        this.clearTimeouts();
        this.setTimeouts();
    },
    
    setTimeouts() {
        if (!isFeatureEnabled('auto_reset')) return;
        
        const warningDelay = getConfig('TIMING.INACTIVITY_WARNING', 300000); // 5 min
        const resetDelay = getConfig('TIMING.SESSION_TIMEOUT', 1800000); // 30 min
        
        // Warning après 5 minutes
        this.timeouts.warning = setTimeout(() => {
            this.showInactivityWarning();
        }, warningDelay);
        
        // Reset après 30 minutes
        this.timeouts.reset = setTimeout(() => {
            this.autoReset();
        }, resetDelay);
    },
    
    clearTimeouts() {
        Object.values(this.timeouts).forEach(timeout => {
            if (timeout) clearTimeout(timeout);
        });
        this.timeouts = { warning: null, reset: null };
    },
    
    showInactivityWarning() {
        if (this.warningShown) return;
        this.warningShown = true;
        
        Toast.warning(
            'Session inactive - Le kiosque va redémarrer automatiquement dans 25 minutes',
            10000
        );
        
        debugLog('Avertissement inactivité affiché');
    },
    
    autoReset() {
        debugLog('Auto-reset de la session');
        
        Toast.info('Redémarrage automatique pour le prochain client...', 3000);
        
        setTimeout(() => {
            if (typeof resetKiosk === 'function') {
                resetKiosk();
            } else {
                location.reload();
            }
        }, 3000);
    },
    
    end() {
        this.clearTimeouts();
        debugLog('Session terminée');
    },
    
    getDuration() {
        if (!this.startTime) return 0;
        return new Date() - this.startTime;
    },
    
    getInactivityDuration() {
        if (!this.lastActivity) return 0;
        return new Date() - this.lastActivity;
    }
};

// ========================================
// STYLES CSS INJECTÉS
// ========================================

function injectKioskStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Animations pour le kiosque */
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Classes utilitaires */
        .slide-in {
            animation: slideInUp 0.3s ease-out;
        }
        
        .pulse-on-hover:hover {
            animation: pulse 0.6s ease-in-out;
        }
        
        .shake-error {
            animation: shake 0.5s ease-in-out;
        }
        
        /* Optimisations tactiles */
        .btn-touch {
            min-height: ${getConfig('UI.SCREEN.BUTTON_MIN_HEIGHT', '80px')};
            font-size: ${getConfig('UI.SCREEN.FONT_SIZE_BASE', '18px')};
            font-weight: 600;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        }
        
        .btn-touch:active {
            transform: scale(0.98);
        }
        
        /* Couleurs McDonald's */
        .mcdo-red { background-color: ${getConfig('UI.COLORS.PRIMARY', '#DA020E')}; }
        .mcdo-yellow { background-color: ${getConfig('UI.COLORS.SECONDARY', '#FFC72C')}; }
        .mcdo-green { background-color: ${getConfig('UI.COLORS.SUCCESS', '#27AE60')}; }
        
        /* Transitions fluides */
        .transition-all {
            transition: all ${getConfig('UI.ANIMATION.DURATION', '300ms')} ${getConfig('UI.ANIMATION.EASING', 'ease-out')};
        }
        
        /* Écran de chargement */
        .loading-spinner {
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid ${getConfig('UI.COLORS.SECONDARY', '#FFC72C')};
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Responsive pour 22 pouces */
        @media (min-width: 1920px) {
            body { font-size: ${getConfig('UI.SCREEN.FONT_SIZE_BASE', '18px')}; }
            .text-responsive { font-size: 1.2em; }
        }
        
        /* Accessibilité */
        .focus-visible:focus {
            outline: 3px solid ${getConfig('UI.COLORS.SECONDARY', '#FFC72C')};
            outline-offset: 2px;
        }
    `;
    
    document.head.appendChild(style);
    debugLog('Styles kiosque injectés');
}

// ========================================
// INITIALISATION AUTOMATIQUE
// ========================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeKioskConfig);
} else {
    initializeKioskConfig();
}

function initializeKioskConfig() {
    debugLog('Initialisation de la configuration kiosque...');
    
    // Injecter les styles
    injectKioskStyles();
    
    // Initialiser la connexion
    Connection.init();
    
    // Initialiser la session
    Session.init();
    
    // Charger la configuration publique depuis l'API
    loadPublicConfig();
    
    debugLog('Configuration kiosque initialisée', {
        version: getConfig('APP.VERSION'),
        features: Object.keys(CONFIG.FEATURES).filter(key => isFeatureEnabled(key))
    });
}

async function loadPublicConfig() {
    try {
        const publicConfig = await API.get('/api/config/public');
        
        // Fusionner avec la config locale
        if (publicConfig.business) {
            Object.assign(CONFIG.BUSINESS, publicConfig.business);
        }
        
        if (publicConfig.allergens) {
            Object.assign(CONFIG.ALLERGENS, publicConfig.allergens);
        }
        
        if (publicConfig.features) {
            Object.assign(CONFIG.FEATURES, publicConfig.features);
        }
        
        debugLog('Configuration publique chargée depuis l\'API');
        
    } catch (error) {
        debugLog('Impossible de charger la configuration publique, utilisation des valeurs par défaut', error, 'warn');
    }
}

// ========================================
// EXPORT GLOBAL
// ========================================

// Rendre disponible globalement
window.CONFIG = CONFIG;
window.getConfig = getConfig;
window.isFeatureEnabled = isFeatureEnabled;
window.getEndpointUrl = getEndpointUrl;
window.getMessage = getMessage;
window.debugLog = debugLog;
window.calculateTotals = calculateTotals;
window.isValidEmail = isValidEmail;
window.isValidPhone = isValidPhone;
window.formatPrice = formatPrice;
window.generateId = generateId;
window.Storage = Storage;
window.Animation = Animation;
window.Toast = Toast;
window.API = API;
window.APIError = APIError;
window.Connection = Connection;
window.Session = Session;

// Message de confirmation
console.log('%c✅ Configuration Kiosque chargée avec succès', 'color: green; font-weight: bold; font-size: 14px;');
console.log(`%c🏠 ${getConfig('APP.NAME')} v${getConfig('APP.VERSION')}`, 'color: #DA020E; font-weight: bold; font-size: 12px;');
console.log(`%c🔗 API: ${getConfig('API_URL')}`, 'color: gray; font-size: 10px;');

if (getConfig('DEBUG.ENABLED')) {
    console.log('%c🐛 Mode Debug activé', 'color: orange; font-weight: bold;');
    console.log('Configuration complète:', CONFIG);
}