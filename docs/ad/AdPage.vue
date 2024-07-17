<script setup>

</script>

<template>
    <div class="ad">
        <h1>广告区</h1>
        <p class="des">
            <i>这是本拾荒者吃饭的地方</i> <br>
            本站不接 <strong>赌｜毒｜诈骗</strong> 等广告
        </p>
        <p class="des">
            广告策略：<span style="color: var(--vp-c-indigo-1);">
                <a href="/about/ad_tactics"><u>广告策略 -> </u></a>
            </span>
        </p>
        <hr>
    </div>
</template>

<style scoped lang="scss">
.ad {
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;

    h1 {
        letter-spacing: -0.02em;
        margin-bottom: 15px;
        font-size: 32px;
        font-weight: 600;
        text-align: center;
    }

    .des {
        text-align: center;
        line-height: 1.8em;
    }
}
</style>