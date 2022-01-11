<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container-fluid">
      <div class="col-md-4">
        <router-link to="/" class="link-dark text-decoration-none">
          <h1 class="fs-4 mb-0">白邸</h1>
        </router-link>
      </div>
      <div class="col-md-4">
        <div class="logo text-center">
          <img src="@/assets/images/Home-icon-s.png" alt="logo" />
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end mt-3 mt-md-0" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item me-2">
            <a class="nav-link" href="#">
              <i class="fas fa-map-marker-alt me-1"></i>台中市幸福區幸福路100號
            </a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link" href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link" href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
