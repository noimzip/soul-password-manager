import './style.css'

document.querySelector('#app').innerHTML = `
	<header>
      <m3e-app-bar>
        <m3e-icon-button slot="leading-icon" aria-label="Back">
          <m3e-icon name="arrow_back"></m3e-icon>
        </m3e-icon-button>
        <span slot="title">Soul Password Manager</span>
        <m3e-form-field variant="outlined" slot="trailing-icon">
          <input id="fld" placeholder="Search here"/>
        </m3e-form-field>
        <m3e-icon-button variant="filled" slot="trailing-icon">
          <m3e-icon name="settings"></m3e-icon>
        </m3e-icon-button>
      </m3e-app-bar>
    </header>
    
    <section id="left_sidebar_content">
      <m3e-nav-menu>
        <m3e-nav-menu-item-group>
          <m3e-heading slot="label" variant="label" size="large">Passwords</m3e-heading>
          <m3e-nav-menu-item>
            <m3e-icon slot="icon" name="g_translate"></m3e-icon>
            <span slot="label">Google.com</span>
          </m3e-nav-menu-item>
          <!-- Additional items omitted for brevity -->
        </m3e-nav-menu-item-group>
      </m3e-nav-menu>
    </section>

    <section id="center_content">

    </section>

    <section id="right_sidebar_content">

    </section>

    <footer>

    </footer>

    <m3e-fab id="make_fab" variant="primary" size="large">
      <m3e-fab-menu-trigger for="fab_menu">
        <m3e-icon name="add"></m3e-icon>
      </m3e-fab-menu-trigger>
    </m3e-fab>

    <m3e-fab-menu id="fab_menu" variant="primary">
      <m3e-fab-menu-item>
        <m3e-icon slot="icon" name="person" filled></m3e-icon>
        ログイン情報
      </m3e-fab-menu-item>
      <m3e-fab-menu-item>
        <m3e-icon slot="icon" name="notes" filled></m3e-icon>
        メモ
      </m3e-fab-menu-item>
      <m3e-fab-menu-item>
        <m3e-icon slot="icon" name="badge" filled></m3e-icon>
        個人情報
      </m3e-fab-menu-item>
      <m3e-fab-menu-item>
        <m3e-icon slot="icon" name="key" filled></m3e-icon>
        <m3e-dialog-trigger for="pass_maker">
        パスワード生成
        </m3e-dialog-trigger>
      </m3e-fab-menu-item>
      <m3e-fab-menu-item>
        <m3e-icon slot="icon" name="check" filled></m3e-icon>
        <m3e-dialog-trigger for="pass_checker">
          パスワード安全性チェッカー
        </m3e-dialog-trigger>
      </m3e-fab-menu-item>
    </m3e-fab-menu>

    <m3e-dialog id="pass_maker" dismissible>
      <span slot="header">パスワードの自動生成</span>
      <!-- Content omitted for brevity -->
      <m3e-slider labelled>
        <m3e-slider-thumb></m3e-slider-thumb>
      </m3e-slider>

      <div slot="actions">
        <m3e-button autofocus>
          <m3e-dialog-action return-value="ok">Close</m3e-dialog-action>
        </m3e-button>
      </div>
    </m3e-dialog>

    <m3e-dialog id="pass_checker" dismissible>
      <span slot="header">パスワードの安全性チェック</span>
      <!-- Content omitted for brevity -->
      <m3e-form-field variant="outlined">
        <input id="pass_check_form" placeholder="Enter your password here"/>
      </m3e-form-field>

      <div slot="actions">
        <m3e-button autofocus>
          <m3e-dialog-action return-value="ok">Close</m3e-dialog-action>
        </m3e-button>
      </div>
    </m3e-dialog>

    <m3e-dialog open dismissible>
      <span slot="header">Ver 25.12.28 (Unstable)</span>
      <h1>現在のSoulはデモ版です。</h1>
      開発者向けに設計されていて操作が煩雑な上、期待通りに動作しない可能性が高く、セキュリティやプライバシーも十分ではありません。
      <h2>はっきり言って使い物になりません。<br><br>他のパスワードマネージャの使用を強く推奨します。</h2>
      <h5>おすすめパスワードマネージャー:Bitwarden, Proton Pass, KeePass</h5>
      <h5>おすすめしないパスワードマネージャー:このパスワードマネージャー, 紙で管理するやつ</h5>
      <div slot="actions">
        <m3e-button autofocus>
          <m3e-dialog-action return-value="ok">Close</m3e-dialog-action>
        </m3e-button>
      </div>
    </m3e-dialog>
`
