## GitHub

```
git add .
git commit -m "<commit_name>"
git push -u upstream develop
```
## Folder structure
```

├── .babelrc                        # Configures Babel
├── .eslintrc                       # Configures ESLint
├── .gitignore                      # Tells git which files to ignore
├── README.md                       # Readme File
├── dist                            # Folder where the build script places the built app. Use this in prod.
├── package.json                    # Package configuration. The list of 3rd party libraries and utilities
├── src                             # Source code
│   ├── Views                        # Folder where the different user views are stored
│           ├── Buyer                # Buyer user view
│               ├── dashboard.js     # Buyer dashboard with messages and records tab.
│               ├── messages.js      # Seller message window with sent and received messages.
│               ├── profile.js       # Buyer's profile with option to update info.
│               └── records.js       # View records
│           ├── Common               # Common webpage views for all users.
│               ├── error.js         # Response for erroneous transcations.
│               ├── footer.js        # Footer for the webpage.
│               ├── forgot.js        # Email recovery and change in password.
│               ├── header.js        # Header for webpage.
│               ├── home.js          # View for homepage of application.
│               ├── login            # Login page 
│               ├── signup           # Signup Page
│               └── success          # Success page successful login and signup.
│           ├── Connect              # File to establish connection to heroku server
│               └── connect.js       # Connection to heroku server.
│           ├── Seller               # Seller user view
│               ├── dashboard.js     # Seller dashboard with messages and records tab.
│               ├── messages.js      # Seller message window with sent and received messages.
│               ├── profile.js       # Sellers profile with option to update info.
│               └── records.js       # View records
│           ├── user_old             
│               ├── dashboard.js     # Dashboard with messages and records tab.
│               ├── doc_uploads.js   # Webpage to upload documents.
│               ├── documents.js     # Webpage to view and search documents.
│               ├── form.js          # Webapage to enter details of required documents.
│               ├── med_history.js   # View of profile of patient with various medical data.
│               ├── overview.js      # Overview of record owner with basic details.
│               ├── profile.js       # Details profile view with option to update.
│               └── records.js       # View of all the records updated and current status.
│           └── verifier
│               ├── dashboard.js     # Verifiers dashboard with messages and records tab.
│               ├── messages.js      # Verifiers message window with sent and received messages.
│               ├── profile.js       # Verifiers profile with option to update info.
│               └── records.js       # View records
└── webpack.config.js     # Configures webpack for builds
```


