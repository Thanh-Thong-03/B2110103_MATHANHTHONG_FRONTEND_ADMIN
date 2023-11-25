<template>
    <div class="c">
      <h1>Quản lí nhân viên</h1>
      <!-- Bảng hiển thị danh sách đơn hàng -->
      <div class="b">
        <div class="container">
          <div class="left">
            <router-link to="/staff/create">
              <button class="btn-create">Thêm</button>
            </router-link>
          </div>
          <div class="right">
            <div class="d-flex">
              <input v-model="hoten" type="search" placeholder="Nhập tên nhân viên" />
              <button class="btn-search" @click="handleSearch">Tìm kiếm</button>
            </div>
          </div>
        </div>
        <table class="table">
          <tr>
            <th>STT</th>
            <th>Tên nhân viên</th>
            <th>Email</th>
            <th>Chức vụ</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Chức năng</th>
          </tr>
          <tbody v-if="staff">
            <tr v-for="(item, i) in staff" :key="i">
              <td>{{ i }}</td>
              <td>{{ item.hoten }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.chucvu }}</td>
              <td>{{ item.diachi }}</td>
              <td>{{ item.phone }}</td>
              <td>
                <button class="btn-delete" @click="handleDelete(item._id)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
import { onBeforeMount, ref } from "vue";
import staffService from "../services/staff.service";
export default {
  setup() {
    const staff = ref();
    const hoten = ref();

    onBeforeMount(async () => {
      try {
        staff.value = await staffService.getAll();
      } catch (error) {
        console.log(error);
      }
    });

    const handleSearch = async () => {
      if (hoten.value) {
        staff.value = await staffService.getbyname(hoten.value);
      } else {
         staff.value = await staffService.getAll();
      }
    };

    const handleDelete = async (id) => {
      const index = staff.value.findIndex((pd) => pd._id == id);
      await staffService.delete(id);
      staff.value.splice(index, 1);
    };
    return { product, hoten, handleSearch, handleDelete };
  },
};
</script>

<style scoped>
.b {
  margin: 15px;
}

h1 {
  text-align: center;
  padding: 30px;
  color: #18191a;
  border-bottom: 2px solid #ccc9c9;
}

h4 {
  padding: 10px;
  text-align: center;
}
.table {
  margin-top: 10px;
}

.c {
  background-color: #BCFEFE;

}

th{
  text-align: center;
  vertical-align: middle !important;
  border-style: double;
  background-color: #2d99ae;
}

td {
  text-align: center;
  border-style: groove;
}

.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.left {
  float: left;
  border-radius: 4px;
  width: 25%;
  padding-top: 5px;
}

.right {
  width: 30%;
  float: right;
  color: #fff;
  border-radius: 4px;
}
.btn-view {
  background-color: #fbff00;
  width: 60px;
  border-radius: 8px;
  margin: 5px;
}

.btn-edit {
  background-color: rgb(49, 236, 43);
  width: 60px;
  border-radius: 8px;
  margin: 5px;
}

.btn-delete {
  background-color: #ee2415;
  width: 60px;
  border-radius: 8px;
  margin: 5px;
}

.btn-create {
  background-color: #284cec;
  width: 100px;
  border-radius: 8px;
  color: white;
}

.btn-search {
  background-color: #ee0ec9;
  width: 100px;
  border-radius: 8px;
  margin: 5px;
}
</style>
