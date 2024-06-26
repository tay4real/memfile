export const user_action_types = {
  SET_USER_DATA: "SET_USER_DATA",
  SET_ERROR_OPERATION: "SET_ERROR_OPERATION",
  SET_SUCCESS_OPERATION: "SET_SUCCESS_OPERATION",
  REMOVE_USER_DATA: "REMOVE_USER_DATA",
  USER_LOGGED_OUT: "USER_LOGGED_OUT",
  SET_IS_AUTH: "SET_IS_AUTH",
};

export const department_action_types = {
  CREATE_DEPARTMENTS: "CREATE_DEPARTMENTS",
  RETRIEVE_DEPARTMENTS: "RETRIEVE_DEPARTMENTS",
  UPDATE_DEPARTMENT: "UPDATE_DEPARTMENT",
  REMOVE_DEPARTMENT: "REMOVE_DEPARTMENT",
  RESTORE_DEPARTMENT: "RESTORE_DEPARTMENT",
  DELETE_DEPARTMENT: "DELETE_DEPARTMENT",
  DELETE_ALL_DEPARTMENTS: "DELETE_ALL_DEPARTMENTS",
};

export const admin_action_types = {
  SET_ALL_USERS: "SET_ALL_USERS",
  SET_ACTIVE_USERS: "SET_ACTIVE_USERS",
  SET_INACTIVE_USERS: "SET_INACTIVE_USERS",
  SET_USER: "SET_USER",
  SET_ERROR_OPERATION: "SET_ERROR",
  SET_SUCCESS_OPERATION: "SET_SUCCESS_OPERATION",
};

export const file_action_types = {
  SET_FILES: "SET_FILES",
  SET_FILE_DETAIL: "SET_FILE_DETAIL",
  SET_TRASHED_FILES: "SET_TRASHED_FILES",
  SET_ERROR_OPERATION: "SET_ERROR_OPERATION",
  SET_SUCCESS_OPERATION: "SET_SUCCESS_OPERATION",
  REMOVE_FILE_DATA: "REMOVE_FILE_DATA",
};

export const mail_action_types = {
  SET_ALL_MAILS: "SET_ALL_MAILS",
  SET_INCOMING_MAILS: "SET_INCOMING_MAILS",
  SET_OUTGOING_MAILS: "SET_OUTGOING_MAILS",
  SET_TRASHED_MAILS: "SET_TRASHED_MAILS",
  SET_MAIL_DETAIL: "SET_MAIL_DETAIL",
  SET_FILEIMAGE_PATH: "SET_FILEIMAGE_PATH",
  SET_ERROR_OPERATION: "SET_ERROR",
  SET_SUCCESS_OPERATION: "SET_SUCCESS_OPERATION",
};

export const components_action_types = {
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
};
