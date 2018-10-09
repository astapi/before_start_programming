<template>
  <div class="content">
    <h2 class="title">プログラミングとは</h2>

    <p>プログラミングとは一体何でしょうか。
      いまこのページを表示している仕組みもプログラミングで出来ています。</p>

    <h3 id="1">プログラミングでできること</h3>
    <p>プログラミングでできることの一部には以下のようなものがあります。</p>

    <ul>
      <li>Webサイトの作成</li>
      <li>iPhone(iOS)アプリの作成</li>
      <li>Androidアプリの作成</li>
      <li>ゲームの作成(steamやコンシューマーゲーム)</li>
    </ul>

    <p>細かいところで言えば単純な作業をプログラムにし効率化したり、
      Google HomeやAmazon Alexa等のスマートスピーカーで動くアプリも作れたりします。</p>
    <p>このページを見てる方はプログラミングで何がしたいのでしょうか。
      特に明確な目的がなくても問題ないと思います。色んなことをやってみて、やりたいことができることもあると思います。</p>
    <p>とりあえずどの分野でも覚えれば、他の分野をやる場合でもスムーズに覚えることができると思います。</p>

    <h3 id="2">プログラミング言語</h3>
    <p>プログラミングにはプログラミング言語と呼ばれるものを使用します。</p>
    <p><strong><a href="#1">プログラミングでできること</a></strong>で書いたようにできることがいくつかありますが、
    それぞれ使用するプログラミング言語が違ったりします。</p>

    <p>ここではWebサイトを例にプログラミング言語を紹介します。Webサイトを作るには一番簡易なもので `html` と呼ばれる言語を使用します。
      <strong>html</strong>はWebサイトのページの文書（つまりこれ）を定義する言語になります。
      <strong>html</strong>のみだとテキストだけだったり簡易的なページになりますので一般的には
      <strong>CSS</strong>と呼ばれる<strong>html</strong>を装飾（見た目を変える）する言語でページの構造や色などを付けたりします。
    <p>更に今のWebサイトではページに動きをつけたりするサイトも多いです。（どこかをクリックしたら何かが出てくる等）
      これには、<strong>javascript</strong>と呼ばれる言語を使用します。</p>

    <p>いきなり3つも言語が出てきて面倒だなと思ったと思います。
      必ずしも必要ということもなく必要に応じて覚えていけばいいのであまり気負いはしなくてよいです。</p>
    <p>多くの学習サイトでは `html` と `css` を同時に学んでいくことも多いと思います。</p>
    <p>他のプログラミング言語については他のページで別途書きます。</p>

    <nuxt-link to="/how_to_programming">
      <button class="button is-link">次へ</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.content h3 {
  padding-bottom: 5px;
  border-bottom: 1px solid #eaecef; 
}

@media screen and (min-width: 1088px) {
}
</style>

