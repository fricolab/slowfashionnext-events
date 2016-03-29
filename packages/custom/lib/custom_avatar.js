var customColorScheme = function (user) {
  if (user.customUserField === "Proveedor")
    return "#ff0000";
  else if (user.customUserField === "Distribución")
    return "#00ff00";
  else if (user.customUserField === "Taller")
    return "#ffff00";
  else if (user.customUserField === "Medios")
    return "#000000";
  else if (user.customUserField === "Diseño")
    return "#ff9900";
  else
    return "#ffffff";
};

Avatar.setOptions({
  backgroundColor: customColorScheme,
  textColor: "#000000"
});
