body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #f5f9f9;
  color: #333;
}

/* HEADER */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(115, 192, 104);
  color: white;
  padding: 10px 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.menu {
  list-style: none;
  display: flex;
  gap: 100px;
  position: relative;
  z-index: 10;
}

.menu a {
  text-decoration: none;
  color: white;
  font-weight: 700;
}

.menu li {
  position: relative;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  color: #333;
  list-style: none;
  padding: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 100;
  min-width: 180px;
}

.submenu li a {
  color: #333;
  display: block;
  padding: 8px 15px;
}

.dropdown {
  position: relative;
}

.dropdown:hover .submenu {
  display: block;
}

.submenu li a:hover {
  background-color: #f0f0f0;
}

.dropdown:hover .submenu {
  display: block;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logout-btn {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

/* CARROSSEL */
.carrossel {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 15px;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: calc(100% - 2em);
  margin: 1.5em 1em;
  box-sizing: border-box;
  border-radius: 5px;
  display: none;
}

.slide.active {
  display: block;
}

.slide img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.carrossel-controls {
  text-align: center;
  margin-top: 10px;
}

.dot {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: rgb(115, 192, 104);
}

/* CLIMA */
.clima {
  text-align: center;
  margin: 30px auto;
  padding: 20px;
  max-width: 600px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.clima-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

#search {
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 8px 0 0 8px;
}

#btnBuscar {
  background-color: rgb(115, 192, 104);
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
}

.resultado-clima {
  margin-top: 15px;
}

/* FOOTER */
.footer {
  background-color: rgb(115, 192, 104);
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: 30px;
}

/* RESPONSIVIDADE */
@media (max-width: 992px) {
  .menu {
    gap: 10px;
  }
}

@media (max-width: 576px) {
  .navbar {
    flex-direction: column;
    text-align: center;
  }

  .menu {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 380px) {
  .slide img {
    height: 250px;
  }

  #search {
    width: 60%;
  }
}
