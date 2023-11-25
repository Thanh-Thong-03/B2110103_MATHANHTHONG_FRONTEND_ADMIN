<template>
  <div>
    <div>

      <div class="container-fluid">
        <div class="row">
          <!-- SideBar -->
          <nav
            id="sidebar"
            class="col-md-3 col-lg-2 d-md-block bg-dark sidebar"
          >
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Trang chủ</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/product"
                    >Quản lí sản phẩm</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user"
                    >Quản lí người dùng</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/staff"
                    >Quản lí nhân viên</router-link
                  >
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4" id="content">
            <!-- Main content goes here -->
            <div class="main">
              <router-view />
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  text-align: center;
  color: #302727;
}

#sidebar {
  background-color: #343a40;
  color: #ffffff;
  padding: 15px;
  min-height: 100vh;
  background-color: #47493d !important;
}

#content {
  transition: margin-left 0.3s;
  padding: 15px;
  overflow-y: scroll;
  height: 740px;
}
.nav-item {
  font-weight: bold;
}
</style>