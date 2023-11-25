<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form class="form-container">
          <h2 class="text-center mb-4">Thông Tin Chi Tiết</h2>
          <div class="mb-3">
            <label class="form-label">Tên</label>
            <input type="text" class="form-control" placeholder="Nhập tên" />
          </div>
          <div class="mb-3">
            <label class="form-label">Giá</label>
            <input type="text" class="form-control" placeholder="Nhập giá" />
          </div>
          <div class="mb-3">
            <label class="form-label">Chất Liệu</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nhập chất liệu"
            />
          </div>
          <button type="submit" class="btn btn-submit btn-block">
            Lưu Thông Tin
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f8f9fa;
  font-family: "Arial", sans-serif;
}

.container {
  margin-top: 50px;
}

.form-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

label {
  font-weight: bold;
}

.btn-submit {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>