# Multi-Market Feature Profiling with Node.js, Express, and React

This simple Node.js, Express, and React app demonstrates how a configuration file can be used to create builds from the same code base for deployment in different markets. By adjusting environment variables, you can tailor the app to specific regions or feature sets.

## Getting Started

1. **Start the Express Server**:

    - Navigate to the `server` folder.
    - Run the following command to start the Express server:
        ```
        npm start
        ```

2. **Run the React App**:
    - Open a new terminal.
    - Navigate to the `client/feature-flags` folder.
    - Use the following commands to start the React app with the required configuration:
        - For Norway (production environment):
            ```
            REACT_APP_ENV=production REACT_APP_COUNTRY=norway npm start
            ```
        - For Canada (production environment):
            ```
            REACT_APP_ENV=production REACT_APP_COUNTRY=canada npm start
            ```
        - For Norway (development environment):
            ```
            REACT_APP_ENV=development REACT_APP_COUNTRY=norway npm start
            ```
        - For Canada (development environment):
            ```
            REACT_APP_ENV=development REACT_APP_COUNTRY=canada npm start
            ```

## Configuration File

The `server/featureFlagsConfig.js` file contains the settings for different environments and markets. This configuration could be in JSON, XML, YAML, etc.

Example configuration:

```javascript
{
  production: {
    norway: {
      newUI: false,
      newFeature: false,
    },
    canada: {
      newUI: false,
      newFeature: true,
    },
  },
  development: {
    norway: {
      newUI: true,
      newFeature: false,
    },
    canada: {
      newUI: true,
      newFeature: true,
    },
  },
}
```

By selecting the appropriate environment and market, you can generate a build that is specifically configured for that region. For instance:

-   In the "development" environment for Norway, the new UI is enabled but not the new feature.
-   In the "production" environment for Canada, the new UI is disabled and new feature is active.

## Features

### New UI

Enjoy a fresh green background for our app!

### New Feature

Now you can select the date of your appointment. Perhaps one day we'll even add a button to submit the form data.
