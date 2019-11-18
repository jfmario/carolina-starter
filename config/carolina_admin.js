
/**
 * Configuration for the carolina/plugins/admin plugin.
 */
exports = module.exports = {

  sections: [
    {
      title: "Users & Roles",
      icon: 'user',
      description: "This section is for managing users and roles.",
      models: [ 'User', 'Group', 'Role' ]
    },
    {
      title: "Site Data",
      icon: 'database',
      models: ['LogEntry', 'SessionInfo']
    }
  ],
  
  modelActions: {
    'User': {
      collection: [
        'Carolina/Admin/CreateTestUsersAction',
        'Carolina/Admin/DeleteNonAdminAction'
      ],
      instance: [
        'Carolina/Admin/SetPasswordAction',
        'Carolina/Admin/PermissionCheck',
        'Carolina/Admin/EmailUserAction'
      ]
    },
    'LogEntry': {
      collection: ['Carolina/Admin/DropTableAction']
    },
    'SessionInfo': {
      collection: ['Carolina/Admin/DropTableAction']
    }
  },

  includeFileAdmin: true,
  fileAdminDrives: [
    'public',
    'private'
  ]
};