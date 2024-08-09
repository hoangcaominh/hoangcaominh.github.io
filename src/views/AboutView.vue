<template>
  <div>
    <i18n-t class="my-6" keypath="about.body1" tag="p">
      <template #touhou_project>
        <a
          :href="$t('about.wiki_url')"
          class="text-blue-600 dark:text-blue-500 hover:underline"
          target="_blank"
          >{{ $t("about.touhou_project") }}</a
        >
      </template>
    </i18n-t>
    <i18n-t keypath="about.body2" tag="p">
      <template #supported_games>
        <ul class="list-disc my-2">
          <li>{{ $t("table.values.th06.title") }}</li>
          <li>{{ $t("table.values.th07.title") }}</li>
          <li>{{ $t("table.values.th08.title") }}</li>
          <li>{{ $t("table.values.th09.title") }}</li>
          <li>{{ $t("table.values.th10.title") }}</li>
          <li>{{ $t("table.values.th11.title") }}</li>
          <li>{{ $t("table.values.th12.title") }}</li>
          <li>{{ $t("table.values.th128.title") }}</li>
          <li>{{ $t("table.values.th13.title") }}</li>
          <li>{{ $t("table.values.th14.title") }}</li>
          <li>{{ $t("table.values.th15.title") }}</li>
          <li>{{ $t("table.values.th16.title") }}</li>
          <li>{{ $t("table.values.th17.title") }}</li>
          <li>{{ $t("table.values.th18.title") }}</li>
        </ul>
      </template>
    </i18n-t>
  </div>
</template>
