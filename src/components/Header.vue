<template>
  <el-menu
    :router="true"
    mode="horizontal"
  >
    <el-menu-item :route="{ name: 'about' }" index="2">About</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
}
</script>
