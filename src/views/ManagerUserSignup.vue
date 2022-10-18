<template>
  <div class="container mt-5 bg-dark container-bprder pb-3">
    <h1 class="text-white mt-3">註冊新使用者</h1>
    <form class="">
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">User</label>
        <input type="text" name="name" class="form-control " value="" required>
      </div>
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">使用權限 (0 訪客、1 管理者、2 維護者、3 一般使用者)</label>
        <input type="number" name="password" class="form-control" value="0" min="0" max="3" required>
      </div>
      <br />
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
form label {
  color: aliceblue
}

.container-bprder {
  border: 5px solid rgb(97, 134, 190);
  border-radius: 5px;
}
</style>