<template>
  <div class="c">
    <h1>Quản lí sản phẩm</h1>
    <!-- Bảng hiển thị danh sách đơn hàng -->
    <div>
      <div class="header">
        <div>  
          <router-link to="/product/create">
          <button class="btn-create">
            <font-awesome-icon :icon="['fas', 'plus']" /> Thêm
          </button>
        </router-link>
        </div>
        <div>
          <input v-model="ten" type="search" placeholder="Nhập tên sản phẩm" />
          <button class="btn-search" @click="handleSearch">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </button>
        </div>
      </div>


      <table class="tb">
        <tr>
          <th><h3>STT</h3></th>
          <th>
            <h3>Tên sản phẩm</h3>
            <i class="fa-solid fa-trash-can"></i>
          </th>
          <th><h3>Hình</h3></th>
          <th><h3>Loại</h3></th>
          <th><h3>Số Lượng</h3></th>
          <th><h3>Giá</h3></th>
          <th><h3>Chức năng</h3></th>
        </tr>
        <tbody v-if="product">
          <tr v-for="(item, i) in product" :key="i">
            <td>{{ i }}</td>
            <td>{{ item.ten }}</td>
            <td><img :src="item.hinh" class="img" /></td>
            <td>{{ item.loai }}</td>
            <td>{{ item.soluonghang }}</td>
            <td>{{ item.gia }}</td>
            <td>
              <router-link :to="`/product/update/${item._id}`"
                ><button class="btn-edit">
                  <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                </button>
              </router-link>
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
import productService from "../services/product.service";

export default {
  setup() {
    const product = ref();
    const ten = ref();

    onBeforeMount(async () => {
      try {
        product.value = await productService.getAll();
      } catch (error) {
        console.log(error);
      }
    });

    const handleSearch = async () => {
      if (ten.value) {
        product.value = await productService.getbyname(ten.value);
      } else {
        product.value = await productService.getAll();
      }
    };
    const handleDelete = async (id) => {
      const index = product.value.findIndex((pd) => pd._id == id);
      await productService.delete(id);
      product.value.splice(index, 1);
    };
    return { product, ten, handleSearch, handleDelete };
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
