const toggleNavigation = (state) => {
  // True: Open Navigation
  // False: Close Navigation
  const navigation = document.getElementById("cg-mobile-navigation");
  navigation.style = state ? "display: block !important;" : "display: none !important;";
};
