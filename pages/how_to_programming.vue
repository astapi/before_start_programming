<template>
  <div class="content">
    <h2 class="title">プログラミングの始め方</h2>

    <p>最近ではプログラミングの学習はやりやすくなりました。
      学習効率の良さでいえば学習サイトとスクールトです。
      次点ではプログラミング技術書です。
    </p>

    <h3>学習サイト</h3>

    <p>学習サイトとは、Webサイト上で動画や独自のシステムを用いてプログラミングの学習が行えるサイトのことです。</p>
    <p>例えば以下のような学習サイトがあります。</p>

    <ul class="site-list">
      <li>
        <p><a href="https://prog-8.com/" target="_blank">Progate</a></p>
        <figure class="image site-list-image" @click="toggleProgateModal()">
          <img src="/progate.png">
        </figure>
        <div class="modal" :class="{ 'is-active': isProgateModalActive}">
          <div class="modal-background" @click="toggleProgateModal()"></div>
          <div class="modal-content">
            <p class="image is-16by9">
              <img src="/progate.png">
            </p>
          </div>
          <button class="modal-close is-large" aria-label="close" @click="toggleProgateModal()"></button>
        </div>
      </li>
      <li>
        <p><a href="https://dotinstall.com/" target="_blank">ドットインストール</a></p>
        <figure class="image site-list-image dotinstall-image" @click="toggleDotinstallModal()">
          <img src="/dotinstall.png">
        </figure>
        <div class="modal" :class="{ 'is-active': isDotinstallModalActive}">
          <div class="modal-background" @click="toggleDotinstallModal()"></div>
          <div class="modal-content">
            <p class="image is-1by1">
              <img src="/dotinstall.png">
            </p>
          </div>
          <button class="modal-close is-large" aria-label="close" @click="toggleDotinstallModal()"></button>
        </div>
      </li>
      <li>
        <p><a href="https://www.udemy.com/jp/" target="_blank">Udemy</a></p>
        <figure class="image site-list-image" @click="toggleUdemyModal()">
          <img src="/udemy.png">
        </figure>
        <div class="modal" :class="{ 'is-active': isUdemyModalActive}">
          <div class="modal-background" @click="toggleUdemyModal()"></div>
          <div class="modal-content">
            <p class="image is-16by9">
              <img src="/udemy.png">
            </p>
          </div>
          <button class="modal-close is-large" aria-label="close" @click="toggleUdemyModal()"></button>
        </div>
      </li>
    </ul>

    <p>Progateは、プログラミングを実行する環境を構築せずにProgateのサイト上でプログラミングを学習することができるため、
      初心者の方には取り組みやすいです。</p>
    <p>ドットインストールは環境構築が必要なものの動画で解説を見ながら写経（プログラミングを見たとおりに書くこと）できるため、
      一歩進んだ学習ができます。</p>
    <p>Udemyは有料の学習サイトです。コースを購入することでドットインストール同様、動画形式で学習することができます。
      コースにより講師が違うためクオリティはそれぞれですが、有料のため説明は丁寧ですね。
      セールをしていることが多いのセール時に興味があるコースを購入するのがおすすめです。</p>

    <h3>スクール</h3>
     <p>スクールは名前の通りプログラミングのスクールのことで講師の元で集中的にプログラミングの学習ができます。
       メリットは対面コミュニケーションで疑問を解決できるところ、集中的に進められるところですがスクールの質もあるため安易に選べません。
     </p>
     <p>スクールには以下のようなところがあります。</p>

    <ul class="site-list">
      <li>
        <p><a href="https://tech-camp.in/" target="_blank">TECH::CAMP</a></p>
      </li>
      <li>
        <p><a href="https://techacademy.jp/" target="_blank">TECHACADEMY</a></p>
      </li>
    </ul>

    <div class="content-footer is-clearfix">
      <nuxt-link to="/need_to_do_programming">
        <button class="button is-link is-pulled-right">次へ</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isProgateModalActive: false,
      isDotinstallModalActive: false,
      isUdemyModalActive: false
    }
  },
  methods: {
    toggleProgateModal() {
      this.isProgateModalActive = !this.isProgateModalActive;
    },
    toggleDotinstallModal() {
      this.isDotinstallModalActive = !this.isDotinstallModalActive;
    },
    toggleUdemyModal() {
      this.isUdemyModalActive = !this.isUdemyModalActive;
    }
  }
}
</script>

<style scoped>
ul.site-list {
  list-style-type: none;
}

ul.site-list li p {
  border-bottom: 1px solid #eaecef; 
}

h3 {
  border-bottom: 1px solid #eaecef; 
}

@media screen and (min-width: 1088px) {
  ul.site-list li {
    margin-bottom: 20px;
  }

  ul.site-list li p {
    font-size: 1.25rem;
    border-bottom: 1px solid #eaecef; 
  }

  .site-list-image {
    width: 480px;
    height: 270px;
  }

  .dotinstall-image {
    width: 400px;
    height: 300px;
  }
}
</style>

