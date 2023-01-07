<template>
  <div class="pkg" @click="handleOpen(pkg.links.npm ?? pkg.links.repository)">
    <div>
      <h3>
        <span>{{ pkg.name.replace('kivibot-plugin-', '') }}</span>
        <span :class="`label ${pkg.version === '0.0.0' ? 'wip' : ''}`">
          {{ pkg.version === '0.0.0' ? '开发中' : `v${pkg.version}` }}
        </span>
        <span class="label official" v-if="isOfficial(pkg)">官方插件</span>
        <span class="label high-quality" v-if="isHighQuality(pkg)">社区优质插件</span>
        <span class="label community" v-if="!isHighQuality(pkg) && !isOfficial(pkg)">社区插件</span>
      </h3>
      <p>{{ pkg.description }}</p>
    </div>

    <div class="footer">
      <span title="发布时间">{{ new Date(pkg.date).toLocaleString() }}</span>
      <div :title="getName(pkg)">
        <img class="avatar" :src="getAvatar(pkg.publisher.email)" />
        <span>{{ getName(pkg) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getName, isOfficial, isHighQuality, getAvatar } from '../utils'

export interface PackageInfo {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  };
  author: {
    name: string;
    email: string;
    url: string;
    username: string;
  };
  publisher: {
    username: string;
    email: string;
  };
  maintainers: {
    username: string;
    email: string;
  }[];
}

const { pkg } = defineProps<{ pkg: PackageInfo }>()





function handleOpen(link: string) {
  window.open(link)
}


</script>

<style lang="less" scoped>
.pkg {
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider-light);
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  margin: 12px 8px;
  width: 32vw;
  min-width: 360px;
  max-width: 480px;
  padding: 8px 12px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    border-color: var(--vp-c-brand);
  }

  h3 {
    font-size: 24px;
    margin: 12px 0;

    .label {
      color: #fff;
      font-size: 10px;
      background-color: rgb(255, 148, 61);
      border-radius: 3px;
      padding: 1px 3px;
      margin: 0 3px;
    }

    .official {
      background-color: #00b782;
    }

    .high-quality {
      background-color: #fe7c7c;
    }

    .community {
      background-color: #00bfdc;
    }

    .wip {
      background-color: #2986ff;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.footer {
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--vp-c-text-3);

  &>div {
    color: var(--vp-c-text-2);
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

}

.avatar {
  max-width: 24px !important;
  border-radius: 12px !important;
  margin-right: 4px;
}

@media (max-width: 712px) {
  .pkg {
    height: 200px;
    max-width: 88vw;
    min-width: 88vw;

    margin: 16px 0 0 0;

    p {
      max-height: 84px;
    }
  }
}
</style>