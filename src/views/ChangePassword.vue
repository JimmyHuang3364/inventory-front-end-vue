<template>
  <div class="container mt-5 bg-dark container-bprder pb-3">
    <h1 class="text-white mt-3">變更密碼</h1>
    <form class="">
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">User</label>
        <input type="text" name="name" class="form-control bg-secondary" value="root" readonly required>
      </div>
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">原來密碼</label>
        <input type="password" name="password" class="form-control" placeholder="Password" required>
      </div>
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">新的密碼</label>
        <input type="password" name="newPassword" class="form-control" placeholder="New Password" required>
      </div>
      <div class="form-label-group text-white mt-4">
        <label for="inputPassword">確認新的密碼</label>
        <input type="password" name="newPasswordCheck" class="form-control" placeholder="New Password Check" required>
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

form input.bg-secondary {
  color: aliceblue
}

.container-bprder {
  border: 5px solid rgb(97, 134, 190);
  border-radius: 5px;
}
</style>