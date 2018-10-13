<template>
  <div class="content">
    <h2 class="title">プログラミングに必要なもの</h2>

    <p>プログラミングをするにあたっていくつか必要なものがあります。</p>

    <h3>パソコン(スマホ)</h3>
    <p>progate はスマホアプリでも出来ますが、ゆくゆく本格的にプログラミングをしたい場合はやはりパソコンがあったほうが良いです。
      パソコンに関してはWindows、Macどちらでも問題ありません。</p>

    <h3 id="editor">エディター</h3>
    <p>正式にはテキストエディターです。プログラミングは文章を書くのと同様にテキストを書きますので、テキストエディターをパソコンにインストールします。
      テキストエディターにはいくつかありますが、最近は以下のようなものが一般的です。</p>
    <ul>
      <li><a href="https://atom.io/" target="_blank">Atom</a></li>
      <li><a href="https://code.visualstudio.com/" target="_blank">VSCode</a></li>
      <li><a href="https://www.sublimetext.com/" target="_blank">Sublime Text</a></li>
    </ul>
    <p>また何をプログラミングする際にも基本的にはどのエディタを使用しても良いのですが、
       <strong>IDE</strong>と呼ばれる高性能なエディタを使用することが推奨されている言語もあります。</p>
    <p>IDEの多くは有料の物が多いです。例えば以下のようなものです。</p>
    <ul>
      <li><a href="https://www.jetbrains.com/ruby/" target="_blank">RubyMine</a></li>
      <li><a href="https://www.jetbrains.com/phpstorm/" target="_blank">PhpStorm</a></li>
    </ul>
    <p>このようにRuby,PHPとプログラミング言語の名前がついているものはその言語に特化したIDEです。他にもありますがここでは割愛します。</p>

    <h3>インターネット</h3>
    <p>いまこのサイトを見ている方はインターネットができているので心配はないと思いますが、
      だいたい何を調べるにもインターネットを使用します。</p>
    <p>プログラミングの書籍で勉強をする場合はインターネット環境がなくても良い場合もあります。</p>

    <h3>まとめ</h3>
    <p>基本的にはパソコンとインターネットができる環境があればプログラミングはできます。
      タブレットでやる人もいますがそういう人は慣れているのでパソコンでやるのが無難です。
    </p>
    <p>いまは多くの方がパソコンを持っているので始める敷居は低いですね。</p>

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

