# Configuration du Formulaire de Contact

## Problème : Send Message ne fonctionne pas

Le formulaire de contact nécessite des variables d'environnement pour fonctionner. Voici comment le configurer :

### 1. Créer le fichier `.env.local`

Créez un fichier `.env.local` à la racine du projet avec le contenu suivant :

```env
# Contact Form Configuration
EMAIL_ADDRESS=votre-email@gmail.com
GMAIL_PASSKEY=votre-mot-de-passe-application
TELEGRAM_BOT_TOKEN=votre-token-bot-telegram
TELEGRAM_CHAT_ID=votre-chat-id-telegram

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 2. Configuration Gmail

1. Activez l'authentification à 2 facteurs sur votre compte Gmail
2. Générez un "Mot de passe d'application" :
   - Allez dans Paramètres Google > Sécurité
   - Activez l'authentification à 2 facteurs
   - Générez un mot de passe d'application pour "Mail"
   - Utilisez ce mot de passe dans `GMAIL_PASSKEY`

### 3. Configuration Telegram (Optionnel)

1. Créez un bot via @BotFather sur Telegram
2. Obtenez le token du bot
3. Obtenez votre Chat ID :
   - Envoyez un message à votre bot
   - Visitez : `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Trouvez votre chat_id dans la réponse

### 4. Redémarrer le serveur

Après avoir configuré les variables d'environnement :

```bash
npm run dev
```

## Boutons de Démonstration Ajoutés

✅ **Bouton "Démonstration"** : Ajouté à chaque projet
✅ **Bouton "Code"** : Bouton secondaire pour le code source
✅ **Design cohérent** : Même style que les autres boutons du portfolio
✅ **Placeholders** : Les liens sont prêts pour vos démonstrations

### Utilisation

Les boutons utilisent les champs `demo` et `code` du fichier `utils/data/projects-data.js`. Vous pouvez maintenant :

1. Ajouter vos liens de démonstration dans le champ `demo`
2. Ajouter vos liens de code source dans le champ `code`
3. Les boutons s'afficheront automatiquement sur chaque projet
