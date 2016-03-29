// Custom Post Field

/*Posts.addField({
  fieldName: 'customPostField',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});*/

// Custom Comment Field

/*Comments.addField({
  fieldName: 'customCommentField',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});*/

// Custom User Field

Users.addField({
  fieldName: 'customUserField',
  fieldSchema: {
    type: String,
    allowedValues: ["Proveedor", "Distribución", "Medios", "Asesoramiento", "Taller", "Diseño", "Otros"],
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Users.addField({
  fieldName: 'customAge',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Users.addField({
  fieldName: 'customSex',
  fieldSchema: {
    type: String,
    allowedValues: ["Mujer","Hombre","Otro"],
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Users.addField({
  fieldName: 'customCountry',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

// Custom Setting Field

/*Settings.addField({
  fieldName: "customSettingsField",
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      group: "customGroup"
    }
  }
});*/
