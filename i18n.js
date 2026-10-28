(function () {
  try {
    const translations = {
      zh: {
        appName:'与鹅同行', editTrip:'编辑旅行', switchTrip:'切换旅行', bills:'账单', people:'成员', settle:'结算', newBill:'新建账单', newTrip:'新建旅行',
        newBillTitle:'新建账单', editBillTitle:'编辑账单', merchantName:'商家 / 项目名称', payer:'谁先付款？', category:'类别', dining:'餐饮', transport:'交通', tickets:'门票', lodging:'住宿', other:'其他', date:'日期', taxRate:'当地税率（%）', taxAmount:'账单实际税额（$）', tip:'小费 / 服务费（$）', tipPayer:'小费承担者', allSplit:'全体成员均分', cancel:'取消', createAdd:'创建并添加项目', save:'保存', saveItem:'保存项目', addItem:'添加消费项目', itemName:'项目名称', preTaxPrice:'税前价格（$）', splitMethod:'分摊方式', equalSplit:'消费人均分', singleSplit:'一人承担', consumers:'消费人', managePeople:'管理成员', addMember:'添加成员', newMember:'新增成员', memberName:'成员名称', close:'关闭', delete:'删除', edit:'编辑',
        tripTotal:'旅行总开销', allBills:'全部账单', addBill:'添加账单', currentBalance:'当前余额', viewSettlement:'查看结算', noBills:'还没有账单', firstReceipt:'从第一张收据开始吧', billTotal:'账单合计', owing:'应付', receivable:'应收', paid:'已付', shouldPay:'应承担', suggestedTransfer:'建议这样转账', transfersCombined:'已将所有账单合并，并尽量减少转账次数。', allSettled:'大家已经结清。',
        fellowMembers:'同行成员', manageTripMembers:'管理旅行成员与各自的付款、消费情况', memberCount:'位成员', member:'成员', paidAmount:'已付款', owedAmount:'应承担', balance:'余额', tripSettlement:'旅行结算', settledBalances:'按以下转账后，所有人的余额都会归零。', pendingTotal:'待结算总额', transferList:'转账清单', copyList:'复制清单', noTransfer:'无需转账，已经全部结清。', preTaxAmount:'税前金额', consumer:'消费人', backBills:'返回账单', addProject:'添加项目', subtotal:'商品小计', taxShare:'税额（按税前金额比例分摊）', tipService:'小费 / 服务费', billSplit:'这张账单的分摊',
        tripName:'旅行名称', note:'备注', deleteTripTitle:'删除这段旅行？', keepTrip:'保留旅行', deletePersonTitle:'删除这位成员？', keepMember:'保留成员', deleteItemTitle:'删除这个项目？', keepItem:'保留项目', deleteBillTitle:'删除这张账单？', keepBill:'保留账单', deleteMember:'删除成员', deleteProject:'删除项目', deleteBill:'删除账单',
        noNote:'无备注', noDate:'暂无日期', emptyReceipt:'还没有上传收据照片', receiptDetails:'收据详细', receiptPhoto:'收据照片（可选）', takeUpload:'拍照或上传', removePhoto:'移除照片', recognizeItems:'识别消费项目', addSelected:'添加选中项目', noPayables:'当前没有待付款项。',
        taxLineAuto:'税额（按当地税率自动计算）', amount:'金额', editBillButton:'编辑账单', billUpdated:'账单已更新', addMembersHint:'请先添加至少一位旅行成员',
        phrases: {
          '例如：':'e.g. ', '输入昵称':'Enter a nickname', '例如：日期/分工/规则/其他':'For example: dates, roles, rules', '例如：加州海岸线':'For example: California Coast',
          '创建':'Create', '保存修改':'Save changes', '删除账单':'Delete bill', '删除项目':'Delete item', '移除成员':'Remove member',
          '含税 ':'Incl. tax ', '先付':' paid first', ' 项':' items', ' 笔账单 · ':' bills · ', ' 位同行者':' travelers', ' 位成员':' members',
          '税额':'Tax', '当地税率':'Local tax rate', '税前价格':'Pre-tax price', '项目名称':'Item name', '商家 / 项目名称':'Merchant / item name',
          '请至少保留一位成员':'Keep at least one member', '至少保留一位成员':'Keep at least one member', '请输入旅行名称':'Enter a trip name', '请输入成员名称':'Enter a member name', '该成员已经存在':'This member already exists', '请选择至少一位消费人':'Select at least one person',
          '删除后，受影响的历史账单会重新分配。':'Affected past bills will be reassigned.', '删除后，这段旅行的账单和成员也会一起删除。':'Bills and members in this trip will also be deleted.', '删除后，该项目会从账单中移除。':'This item will be removed from the bill.', '删除后，这张账单及其消费项目都会移除。':'This bill and its items will be removed.',
          '查看这张账单的收据照片。':'View the receipt photo for this bill.', '还没有上传收据照片':'No receipt photo uploaded yet', '拍照或上传':'Take a photo or upload', '识别消费项目':'Scan items', '收据详细':'Receipt details', '移除照片':'Remove photo', '照片处理失败':'Could not process photo', '正在识别收据…':'Reading receipt…', '正在加载中英文识别模型…':'Loading Chinese and English recognition models…', '正在准备本地识别…':'Preparing local recognition…', '没有找到明确的项目金额。请换一张更清晰的照片，或手动添加项目。':'No clear item amounts found. Try a clearer photo or add items manually.', '识别失败，请重试':'Recognition failed. Please try again.', '请勾选至少一个有效项目':'Select at least one valid item', '已添加 ':'Added ', ' 项':' items',
          '管理这段旅行的参与成员':'Manage participants in this trip', '选择成员，查看该成员应转给哪位账单付款人。':'Select a member to see which bill payers they should pay.', '按每张账单的付款人计算':'Calculated from each bill payer', '需要转给谁':'Who to pay', '全部参与者':'All participants', '需要支付 ':' payments due: ', '当前无需付款':'Nothing to pay right now', '应收 ':'Owed ', '应付 ':'Owes ', '已付 ':'Paid ', ' · 应承担 ':' · Share ',
          '旅行总开销':'Trip total', '当前余额':'Current balance', '全部账单':'All bills', '添加账单':'Add bill', '查看结算':'View settlement', '转账清单':'Transfers', '复制清单':'Copy list', '待结算总额':'Total to settle', '待付合计':'Total due', '结算前余额':'Balances before settlement', '旅行结算':'Trip settlement', '同行成员':'Trip members', '管理旅行成员与各自的付款、消费情况':'Manage members, payments, and spending', '管理这段旅行的参与成员':'Manage members in this trip', '账单合计':'Bill total', '建议这样转账':'Suggested transfers', '已将所有账单合并，并尽量减少转账次数。':'Bills are combined to reduce the number of transfers.', '大家已经结清。':'Everyone is settled.', '无需转账，已经全部结清。':'No transfers needed. Everyone is settled.', '按以下转账后，所有人的余额都会归零。':'These transfers will settle everyone’s balance.', '从第一张收据开始吧':'Start with your first receipt', '还没有账单':'No bills yet',
          '新建旅行':'New trip', '编辑旅行':'Edit trip', '编辑成员':'Edit member', '新建账单':'New bill', '编辑账单':'Edit bill', '添加消费项目':'Add item', '编辑消费项目':'Edit item', '保存项目':'Save item', '创建并添加项目':'Create and add items', '保存修改':'Save changes', '管理成员':'Manage members', '新增成员':'Add member', '旅行名称':'Trip name', '备注':'Notes', '日期':'Date', '谁先付款？':'Who paid first?', '类别':'Category', '餐饮':'Dining', '交通':'Transport', '门票':'Tickets', '住宿':'Lodging', '其他':'Other', '当地税率（%）':'Local tax rate (%)', '账单实际税额（$）':'Actual bill tax ($)', '小费 / 服务费（$）':'Tip / service fee ($)', '小费承担者':'Tip payer', '全体成员均分':'Split among everyone', '消费人均分':'Split equally', '一人承担':'One person pays', '消费人':'People who ordered', '消费项目':'Item', '税前金额':'Pre-tax amount', '商品小计':'Items subtotal', '税额（按税前金额比例分摊）':'Tax (split by pre-tax amount)', '税额（按当地税率自动计算）':'Tax (calculated from local rate)', '这张账单的分摊':'Bill split', '删除这位成员？':'Delete this member?', '删除这段旅行？':'Delete this trip?', '删除这个项目？':'Delete this item?', '删除这张账单？':'Delete this bill?', '保留成员':'Keep member', '保留旅行':'Keep trip', '保留项目':'Keep item', '保留账单':'Keep bill', '删除成员':'Delete member', '删除旅行':'Delete trip', '删除项目':'Delete item', '删除账单':'Delete bill', '返回账单':'Back to bills', '添加项目':'Add item', '收据照片（可选）':'Receipt photo (optional)', '输入昵称':'Enter a nickname', '消费项目名称':'Item name', '消费项目金额':'Item amount', '导入第':'Import item ', '已复制':'Copied', '转账清单已复制':'Transfer list copied', '请选择至少一位消费人':'Select at least one person who ordered', '请输入旅行名称':'Enter a trip name', '请输入成员名称':'Enter a member name', '至少保留一位成员':'Keep at least one member', '请至少保留一位成员':'Keep at least one member', '请先添加至少一位旅行成员':'Add at least one trip member first', '还没有账单':'No bills yet', '从第一张收据开始吧':'Start with your first receipt', '暂无日期':'No date', '无备注':'No notes', '已付款':'Paid', '应承担':'Share', '结算前余额':'Balances before settlement', '管理旅行成员与各自的付款、消费情况':'Manage members, payments, and spending', '管理这段旅行的参与成员':'Manage members in this trip', '按以下转账后，所有人的余额都会归零。':'These transfers will settle everyone’s balance.', '选择成员，查看该成员应转给哪位账单付款人。':'Select a member to see which bill payers they should pay.', '按每张账单的付款人计算':'Calculated from each bill payer', '需要转给谁':'Who to pay', '全部参与者':'All participants', '当前无需付款':'Nothing to pay right now', '当前没有待付款项。':'Nothing to pay right now.', '需要支付 ':'Payments due: ', '的待付款项':' — payments due', '新旅行':'New trip', '已含税价格':'Tax-inclusive price', '已含税价格（$）':'Tax-inclusive price ($)', '税前价格（$）':'Pre-tax price ($)', '价格类型':'Price type', '是否应税':'Taxable', '需要收税':'Taxable', '免税':'Tax exempt', '收据照片':'Receipt photo', '收据照片预览':'Receipt photo preview', '照片不能超过 25 MB':'Photo must be 25 MB or smaller', '照片读取失败':'Could not read photo', '无法读取这张照片':'Could not read this photo', '识别组件加载失败，请检查网络后重试':'Could not load recognition tools. Check your connection and try again.', '识别到 ':'Found ', ' 个候选项目，请核对名称和金额后导入。':' candidate items. Check the names and amounts before importing.', '没有找到明确的项目金额。请换一张更清晰的照片，或手动添加项目。':'No clear item amounts found. Try a clearer photo or add items manually.', '请勾选至少一个有效项目':'Select at least one valid item', '新版本已就绪，刷新后即可使用。':'A new version is ready. Refresh to use it.', '立即刷新':'Refresh now', '确定删除':'Confirm deletion', '删除“':'Delete “', '确定删除“':'Delete “', '”及其全部账单和成员吗？':'” and all its bills and members?', '”这个消费项目吗？':'” as an item?', '删除成员“':'Delete member “', '”？历史账单':'”? Past bills', '确定删除账单“':'Delete bill “', '”及其所有消费项目吗？':'” and all its items?', '此操作无法撤销。':'This action cannot be undone.', '历史账单中由该成员付款的记录会转给其他成员，消费项目也会重新分配。':'Past bills paid by this member will be reassigned, and item splits will be updated.', '转账清单已复制':'Transfer list copied', '含税 ':'Incl. tax ', '税额':'Tax', '商品小计':'Items subtotal'
        }
      },
      en: {}
    };
    const enKeys = {
      appName:'PenguinCrew', editTrip:'Edit trip', switchTrip:'Switch trip', bills:'Bills', people:'People', settle:'Settle up', newBill:'New bill', newTrip:'New trip', newBillTitle:'New bill', editBillTitle:'Edit bill', merchantName:'Merchant / item name', payer:'Who paid first?', category:'Category', dining:'Dining', transport:'Transport', tickets:'Tickets', lodging:'Lodging', other:'Other', date:'Date', taxRate:'Local tax rate (%)', taxAmount:'Actual bill tax ($)', tip:'Tip / service fee ($)', tipPayer:'Tip payer', allSplit:'Split among everyone', cancel:'Cancel', createAdd:'Create and add items', save:'Save', saveItem:'Save item', addItem:'Add item', itemName:'Item name', preTaxPrice:'Pre-tax price ($)', splitMethod:'Split method', equalSplit:'Split equally', singleSplit:'One person pays', consumers:'People who ordered', managePeople:'Manage members', addMember:'Add member', newMember:'Add member', memberName:'Member name', close:'Close', delete:'Delete', edit:'Edit', tripTotal:'Trip total', allBills:'All bills', addBill:'Add bill', currentBalance:'Current balance', viewSettlement:'View settlement', noBills:'No bills yet', firstReceipt:'Start with your first receipt', billTotal:'Bill total', owing:'Owes', receivable:'Owed', paid:'Paid', shouldPay:'Share', suggestedTransfer:'Suggested transfers', transfersCombined:'Bills are combined to reduce the number of transfers.', allSettled:'Everyone is settled.', fellowMembers:'Trip members', manageTripMembers:'Manage members, payments, and spending', memberCount:'members', member:'Member', paidAmount:'Paid', owedAmount:'Share', balance:'Balance', tripSettlement:'Trip settlement', settledBalances:'These transfers will settle everyone’s balance.', pendingTotal:'Total to settle', transferList:'Transfers', copyList:'Copy list', noTransfer:'No transfers needed. Everyone is settled.', preTaxAmount:'Pre-tax amount', consumer:'People who ordered', backBills:'Back to bills', addProject:'Add item', subtotal:'Items subtotal', taxShare:'Tax (split by pre-tax amount)', tipService:'Tip / service fee', billSplit:'Bill split', tripName:'Trip name', note:'Notes', deleteTripTitle:'Delete this trip?', keepTrip:'Keep trip', deletePersonTitle:'Delete this member?', keepMember:'Keep member', deleteItemTitle:'Delete this item?', keepItem:'Keep item', deleteBillTitle:'Delete this bill?', keepBill:'Keep bill', deleteMember:'Delete member', deleteProject:'Delete item', deleteBill:'Delete bill', noNote:'No notes', noDate:'No date', emptyReceipt:'No receipt photo uploaded yet', receiptDetails:'Receipt details', receiptPhoto:'Receipt photo (optional)', takeUpload:'Take a photo or upload', removePhoto:'Remove photo', recognizeItems:'Scan items', addSelected:'Add selected items', noPayables:'Nothing to pay right now', taxLineAuto:'Tax (calculated from local rate)', amount:'Amount', editBillButton:'Edit bill', billUpdated:'Bill updated', addMembersHint:'Add at least one trip member first'
    };
    translations.en = Object.assign({}, enKeys);
    const zhToEn = Object.assign({}, translations.zh.phrases);
    Object.keys(enKeys).forEach(key => { if (translations.zh[key]) zhToEn[translations.zh[key]] = enKeys[key]; });
    const phrasePairs = Object.entries(zhToEn).sort((a,b) => b[0].length-a[0].length);
    let current = 'zh';
    function translateText(value, lang) {
      let result = value;
      if (lang === 'en') result = result.replace(/需要支付\s+(\d+)\s+笔/g, (_, count) => `${count} ${count === '1' ? 'payment' : 'payments'} due`);
      else result = result.replace(/(\d+)\s+payments?\s+due/g, (_, count) => `需要支付 ${count} 笔`);
      if (lang === 'en') result = result.replace(/(\d+)\s*项/g, (_, count) => `${count} ${Number(count) <= 1 ? 'item' : 'items'}`);
      else result = result.replace(/(\d+)\s+items?\b/g, (_, count) => `${count} 项`);
      const pairs = lang === 'en' ? phrasePairs : phrasePairs.map(([zh,en])=>[en,zh]).sort((a,b)=>b[0].length-a[0].length);
      for (const [from,to] of pairs) if (from) result = result.split(from).join(to);
      return result;
    }
    function translateRoot(root, lang) {
      try {
        const nodes=[];
        if (root.nodeType===Node.TEXT_NODE) nodes.push(root);
        else if (root.nodeType===Node.ELEMENT_NODE || root===document) {
          const keyed = root.nodeType===Node.ELEMENT_NODE
            ? [root, ...root.querySelectorAll('[data-i18n]')].filter(el=>el.hasAttribute('data-i18n'))
            : [...root.querySelectorAll('[data-i18n]')];
          keyed.forEach(el=>{const key=el.getAttribute('data-i18n');if(translations[lang][key])el.textContent=translations[lang][key]});
          const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
          while(walker.nextNode()) nodes.push(walker.currentNode);
        }
        nodes.forEach(node=>{if(node.parentElement?.closest('[data-i18n]'))return;const next=translateText(node.nodeValue,lang);if(next!==node.nodeValue)node.nodeValue=next});
        const elements=root.nodeType===Node.ELEMENT_NODE?[root,...root.querySelectorAll('*')]:[...document.querySelectorAll('*')];
        elements.forEach(el=>['placeholder','title','aria-label'].forEach(attr=>{if(el.hasAttribute(attr))el.setAttribute(attr,translateText(el.getAttribute(attr),lang))}));
        document.documentElement.lang=lang==='en'?'en':'zh-CN';
        document.title=lang==='en'?'PenguinCrew':'与鹅同行';
        const mobileTitle=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(mobileTitle)mobileTitle.content=document.title;
      } catch (error) { console.error('Translation update failed',error); }
    }
    function applyLanguage(lang) {
      try { current=lang==='en'?'en':'zh';localStorage.setItem('trip-split-language',current);translateRoot(document,current);const button=document.getElementById('languageToggle');if(button){button.textContent=current==='zh'?'EN':'中文';button.setAttribute('aria-label',current==='zh'?'Switch language':'切换语言')} } catch(error) { console.error('Language switch failed',error); }
    }
    document.addEventListener('DOMContentLoaded',function(){
      try {
        let saved=null;try{saved=localStorage.getItem('trip-split-language')}catch(error){}
        const browser=(navigator.language||'zh').toLowerCase();current=saved==='en'||saved==='zh'?saved:(browser.startsWith('zh')?'zh':'en');
        applyLanguage(current);
        document.getElementById('languageToggle')?.addEventListener('click',()=>applyLanguage(current==='zh'?'en':'zh'));
        const observer=new MutationObserver(records=>{try{records.forEach(record=>record.addedNodes.forEach(node=>translateRoot(node,current)));if(records.some(r=>r.type==='characterData'))translateRoot(document,current)}catch(error){console.error('Dynamic translation failed',error)}});
        observer.observe(document.body,{subtree:true,childList:true,characterData:true});
      } catch(error) { console.error('Language initialization failed',error); }
    });
  } catch (error) { console.error('Translation module failed',error); }
})();
