// Custom Post Field

Posts.addField({
  fieldName: 'customPostField',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

// Custom Comment Field

Comments.addField({
  fieldName: 'customCommentField',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

// Custom User Field

Users.addField({
  fieldName: 'customUserField',
  fieldSchema: {
    type: String,
    allowedValues: ["Proveedor - rojo", "Distribuidor - verde", "Medios - negro", "Asesor/Personal Shopper - azul", "Taller - amarillo", "Diseñador/Marca - naranja", "Otros - blanco"],
    optional: true,
    editableBy: ["member", "admin"]
  }
});

// Custom Setting Field

Settings.addField({
  fieldName: "customSettingsField",
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      group: "customGroup"
    }
  }
});
