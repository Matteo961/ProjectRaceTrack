<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title text-center fontneeded">Overzicht</h2>
          <div class="row">
            <div class="col">
              <LapPlayerData player="0"></LapPlayerData>
            </div>
            <div class="col">
              <LapPlayerData player="1"></LapPlayerData>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "lap-data",
  }
</script>

<style scoped>

</style>
