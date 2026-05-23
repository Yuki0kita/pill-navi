/**
 * ぴるナビ アフィリリンク管理ファイル
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A8.net承認後、各URLをアフィリエイトURLに書き換えるだけ。
 * HTMLファイルは一切触らなくてOK。
 *
 * 書き換え例：
 *   MEDERI: 'https://mederi.jp'
 *   → MEDERI: 'https://px.a8.net/svt/ejv?a=XXXXXXXX'
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A8.net プログラムID（申請用メモ）
 *
 *  優先順  クリニック        プログラムID       報酬・特記
 *  ─────────────────────────────────────────
 *  1位    メデリピル        s00000023936002    EPC1,491円・確定率93% ★最優先
 *  2位    マイピル(低用量)  s00000023462003    報酬6,000円 ★高単価
 *  3位    マイピル(アフター)s00000023462001    報酬3,000円
 *  4位    ルナルナ          s00000017930002    確定率100%・2,631円
 *  5位    レバクリ          s00000025176003    確定率100%・2,000円
 *  6位    エミシア          s00000026485001    LINE登録1,000円
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Googleアナリティクス（GA4）設置メモ
 *
 * 1. https://analytics.google.com でプロパティ作成
 * 2. 「測定ID」（G-XXXXXXXXXX形式）を取得
 * 3. 全HTMLファイルの <head> 内のGAコメントを解除して
 *    G-XXXXXXXXXX の部分を実際のIDに書き換える
 * 4. ラッコM&A掲載時に「GA連携」にチェックを入れる
 *    → 査定額が大幅に上がる
 */

'use strict';

const AFFILIATE_LINKS = {
  MEDERI:   'https://mederi.jp',
  MYPILL:   'https://mypill.jp',
  LUNALUNA: 'https://medicine.lnln.jp',
  LEVACLI:  'https://leva-cli.jp',
  EMISIA:   'https://emisia-clinic.jp',
  SMALUNA:  'https://smaluna.com',
};

function applyAffiliateLinks() {
  document.querySelectorAll('[data-affiliate]').forEach(el => {
    const key = el.dataset.affiliate.toUpperCase();
    const url = AFFILIATE_LINKS[key];
    if (!url) return;
    if (el.tagName === 'A') {
      el.href = url;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    } else {
      el.addEventListener('click', () => {
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyAffiliateLinks);
} else {
  applyAffiliateLinks();
}
