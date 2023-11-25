<template>
  <div class="c">
    <h1>Quản lí người dùng</h1>
    <!-- Bảng hiển thị danh sách đơn hàng -->
    <div>
      <div class="header">
        <div>  
          <router-link to="/user/create">
          <button class="btn-create">
            <font-awesome-icon :icon="['fas', 'plus']" /> Thêm
          </button>
        </router-link>
        </div>
        <div>
          <input v-model="fullName" type="search" placeholder="Nhập tên người dùng" />
          <button class="btn-search" @click="handleSearch">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </button>
        </div>
      </div>


      <table class="tb">
        <tr>
          <th><h3>STT</h3></th>
          <th>
            <h3>Tên người dùng</h3>
            <i class="fa-solid fa-trash-can"></i>
          </th>
          <th><h3>Email</h3></th>
          <th><h3>Địa chỉ</h3></th>
          <th><h3>Số điện thoại</h3></th>
          <th><h3>Chức năng</h3></th>
        </tr>
        <tbody v-if="user">
          <tr v-for="(item, i) in user" :key="i">
            <td>{{ i }}</td>
            <td>{{ item.fullName }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.diachi }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <button class="btn-delete" @click="handleDelete(item._id)">
                <font-awesome-icon :icon="['fas', 'trash-can']" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { onBeforeMount, ref } from "vue";
import userService from "../services/user.service";

export default {
  setup() {
    const user = ref();
    const fullName = ref();

    onBeforeMount(async () => {
      try {
        user.value = await userService.getAll();
      } catch (error) {
        console.log(error);
      }
    });

    const handleSearch = async () => {
      if (fullName.value) {
        user.value = await userService.getbyname(fullName.value);
      } else {
        user.value = await userService.getAll();
      }
    };
    const handleDelete = async (id) => {
      const index = user.value.findIndex((pd) => pd._id == id);
      await userService.delete(id);
      user.value.splice(index, 1);
    };
    return { user, fullName, handleSearch, handleDelete };
  },
};
</script>

<style scoped>
.tb {
  width: 100%;
}
.img {
  width: 150px;
  height: 150px;
}
h1 {
  text-align: center;
  padding: 30px;
  color: #18191a;
  background-color: #3c63e2;
  color: #050607;
}

.table {
  margin-top: 10px;
}

.c {
  background-color: white;
}

th {
  text-align: center;
  vertical-align: middle !important;
  border-style: double;
  background-color: #949b9b;
}

td {
  text-align: center;
  border-style: groove;
  padding: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.btn-view {
  background-color: #fbff00;
  width: 50px;
  border-radius: 8px;
  margin: 5px;
}

.btn-edit {
  background-color: rgb(49, 236, 43);
  width: 50px;
  border-radius: 8px;
  margin: 5px;
}

.btn-delete {
  background-color: #ee2415;
  width: 50px;
  border-radius: 8px;
  margin: 5px;
}

.btn-create {
  background-color: #3c63e2;
  width: 110px;
  height: 40px;
  border-radius: 8px;
  color: black;
  font-weight: bold;
}

.btn-search {
  background-color: #ee0ec9;
  width: 50px;
  border-radius: 8px;
  margin: 5px;
}
</style>
