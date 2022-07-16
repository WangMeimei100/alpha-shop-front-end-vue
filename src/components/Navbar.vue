<template>
  <nav class="nav-container">
    <label
      class="nav-container__navbar-toggle-label cursor-pointer"
      for="navbar-toggle"
    >
      <span class="hamburger"></span>
    </label>
    <input
      type="checkbox"
      class="nav-container__navbar-toggle"
      id="navbar-toggle"
    />
    <div class="menu-container">
      <div class="menu">
        <ul class="nav-list d-flex justify-content-start align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="#boy">男款</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#girl">女款</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#latest_news">最新消息</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Customized＿goods">客製商品</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact_us">聯絡我們</a>
          </li>
        </ul>
      </div>
      <div class="icons">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-moon mode"></i>
      </div>
    </div>
    <div class="logo cursor-pointer">
      <img
        class="navbar-brand"
        :src="require('./../assets/pictures/Logo@2x.png')"
        alt="ALPHA Shop Logo"
      />
    </div>
  </nav>
</template>