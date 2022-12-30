<template>
  <div v-if="plugins">
    <h1>KiviBot Beta 插件列表</h1>

    <div class="search">
      <div>
        共计 {{ word ? pkgs.length + ' / ' : '' }}{{ plugins.total }} 个 npm 插件，来自 {{ developers.size }} 个开发者
      </div>
      <input type="text" class="search__input" placeholder="通过插件名、介绍、作者进行搜索" v-model="word" />
    </div>

    <div class="packages">
      <div class="card" v-for="pkg in pkgs" :key="pkg.name">
        <Package :pkg="pkg" />
      </div>
    </div>
  </div>

  <div v-else>
    <div v-if="error">
      插件列表加载失败。
    </div>
    <div v-else>
      正在加载插件列表...
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import Package from '../../components/Package.vue'

import type { PackageInfo } from '../../components/Package.vue'


const plugins = ref({ total: 0, objects: [], time: new Date() })
const word = ref("")
const error = ref()

onMounted(async () => {
  try {
    const api = 'https://inpm.deno.dev/-/v1/search?text=kivibot-plugin&size=250'
    const res = await fetch(api)
    plugins.value = await res.json()

    console.log(plugins.value)
  } catch (err) {
    error.value = err
  }
})



const pkgs = computed(() => {
  if (!plugins.value) {
    return []
  }

  const ps = plugins.value.objects.filter((pkg: { package: PackageInfo }) => {
    const isName = pkg.package.name.includes(word.value)
    const isDescription = pkg.package.description.includes(word.value)
    const isAuthor = pkg.package.publisher.username.includes(word.value)

    return isName || isDescription || isAuthor
  })

  ps.sort((a, b) => a.score.final - b.score.final)

  ps.sort((e: { package: PackageInfo }) => {
    const isOfficial = e.package.publisher.username === 'vikiboss'
    return isOfficial ? 1 : -1
  })

  ps.sort((e: { package: PackageInfo }) => {
    const isWip = e.package.version === '0.0.0'
    return isWip ? 1 : -1
  })

  return ps.map(e => e.package)
})

const developers = computed(() => {
  return new Set(...pkgs.value.map(e => e.publisher.username))
})

</script>

<style lang="less" scoped>
h1 {
  text-align: center;
  margin: 2px 0 8px;
}

.packages {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &>div {
    margin: 8px;
  }

  &>input {
    text-align: center;
    width: 480px;
    font-family: inherit;
    font-size: inherit;
    border: none;
    padding: 0.7rem 1rem;
    border-radius: 30px;
    transition: all ease-in-out .3s;
    background-color: var(--vp-c-bg-alt);
  }

  @media (max-width: 712px) {
    &>input {
      width: 300px;
    }
  }
}

@media (max-width: 712px) {
  .packages {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>