/**
 * ぴるナビ アフィリリンク管理
 * ─────────────────────────────────────────
 * A8.net承認後、各URLをアフィリエイトURLに書き換えるだけ。
 * HTMLは一切触らなくてOK。
 *
 * A8.net プログラムID（申請用）
 *  1位 メデリピル        s00000023936002  EPC1,491円・確定率93% ★最優先
 *  2位 マイピル(低用量)  s00000023462003  報酬6,000円
 *  3位 マイピル(アフター)s00000023462001  報酬3,000円
 *  4位 ルナルナ          s00000017930002  確定率100%
 *  5位 レバクリ          s00000025176003  確定率100%
 *  6位 エミシア          s00000026485001  LINE登録1,000円
 *  ✅  BQCELL            s00000020785003  承認済み・初回1,500円
 *
 * GA4: G-B2KF83FY3D（設置済み）
 * GSC: -Xd5XiKf7QlGk2-sBm8OeTxUWGM7nGD5sT6_4Wi1lSw（設置済み）
 */
'use strict';

const AFFILIATE_LINKS = {
  // ── ピル系（2026-09 運営終了。アフィリエイトリンクは公式サイトへの通常リンクに戻した） ──
  MEDERI:   'https://mederi.jp',
  MYPILL:   'https://mypill.jp',
  LUNALUNA: 'https://medicine.lnln.jp',
  LEVACLI:  'https://levacli.jp',
  EMISIA:   'https://emisia-clinic.jp',
  SMALUNA:  'https://smaluna.com',          // A8.net未掲載・直リンク
  // ── 美容系（A8.net承認済み） ──
  BQCELL:   'https://meon-premier.gangnamdoll.jp/pages/bqcell-peeling-subscription?view=bqcell-2025&preview_theme_id=148281458887',
};

function applyAffiliateLinks() {
  document.querySelectorAll('[data-affiliate]').forEach(el => {
    const key = el.dataset.affiliate.toUpperCase();
    const url = AFFILIATE_LINKS[key];
    if (!url) return;
    if (el.tagName === 'A') {
      el.href = url; el.target = '_blank'; el.rel = 'nofollow sponsored noopener noreferrer';
    } else {
      el.addEventListener('click', () => window.open(url, '_blank', 'noopener,noreferrer'));
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyAffiliateLinks);
} else {
  applyAffiliateLinks();
}
