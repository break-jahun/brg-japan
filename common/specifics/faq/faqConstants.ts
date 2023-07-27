import { FaqListType } from '@/specifics/faq/faqType';

export const CATEGORY_LIST = {
  ko: {
    all: '전 체',
    apply: '신청 및 수령',
    grading: '그레이딩/리홀더',
    cancelAndRefund: '취소 및 환불',
    others: '기타 문의',
  },
  en: {
    all: 'All',
    apply: 'Apply',
    grading: 'Grading',
    others: 'Others',
    guideline: 'Guideline',
  },
};

export const FAQ_LIST: FaqListType = {
  ko: [
    {
      id: 1,
      category: 'apply',
      question: '어떤 택배사를 이용하시나요?',
      answer: [
        'CJ 대한통운을 이용하며, 상황에 따라 우체국 택배를 이용하기도 합니다. 택배사는 출고 처리 후 송장번호와 함께 조회 가능합니다.',
      ],
    },
    {
      id: 2,
      category: 'apply',
      question: '상품은 언제 받아볼 수 있나요?',
      answer: [
        `출고 날짜를 기준으로 보통 2-3일 이내에 수령 가능합니다.`,
        `단, 택배사의 사정에 따라 배송기간이 지연될 수 있습니다.`,
      ],
    },
    {
      id: 3,
      category: 'apply',
      question: '출고 예정일은 어떻게 결정되는 건가요?',
      answer: [
        '출고예정일은 그레이딩 의뢰 카드가 입고 처리된 날의 다음 영업일부터 5영업일(익스프레스를 신청한 경우) 또는 15영업일(레귤러를 신청한 경우)이 경과한 날입니다.',
        '(예를 들어, 그레이딩 의뢰 카드가 2022년 4월 1일에 입고 처리된 경우, 익스프레스는 다음 영업일인 4월 4일부터 5영업일이 지난 4월 8일이 출고예정일이고, 레귤러는 다음 영업일인 4월 4일부터 15영업일이 지난 4월 22일이 출고예정일입니다)',
      ],
    },
    {
      id: 4,
      category: 'apply',
      question: '방문 접수 및 방문 수령이 가능한가요?',
      answer: [
        'brg의 그레이딩 프로세스는 보안사항으로 블라인드로 진행되기에 방문 접수 및 수령은 불가합니다.',
      ],
    },
    {
      id: 5,
      category: 'apply',
      question: '그레이딩 신청 시 어떤 언어로 작성해야 하나요?',
      answer: [
        '카드에 기재된 언어와 관계 없이 한글 또는 영어로 작성하면 됩니다.',
      ],
    },
    {
      id: 6,
      category: 'apply',
      question:
        '이미 카드를 발송했는데 카드 정보(카드 번호, 세트 이름 등)를 잘못 기입했습니다. 어떻게 해야 하나요?',
      answer: [
        '그레이딩 신청서에 카드 정보를 부정확하게 기입하였더라도, brg가 올바르게 수정하여 그레이딩을 시작합니다.',
        '모든 그레이딩 대상 카드의 정보는 brg 카드 데이터베이스에 저장되어 있습니다.',
        '고객님께서 신청서에 기입하는 카드 정보는 단순히 brg 카드 데이터베이스에서 해당 카드의 정보를 불러오기 위한 용도로 이용되는 것이기 때문에 신청서에 기입한 카드 정보가 완벽하지 않더라도 문제 없습니다.',
      ],
    },
    {
      id: 7,
      category: 'apply',
      question:
        '실수로 그레이딩 신청 카드와 다른 카드를 발송했습니다. 어떻게 해야 하나요?',
      answer: [
        '그레이딩은 brg가 실제로 수령한 카드를 대상으로 이루어집니다.',
        '따라서 고객님께서 실수로 그레이딩 신청 카드와 다른 카드를 발송한 경우에는, brg는 실제로 수령한 카드를 대상으로 새로이 카드 정보를 입력하여 그레이딩 절차를 진행합니다.',
        '카드 오발송에 대하여 고객님께 별도로 고지하여 드리지 않으니, 이 점 유의하여 주시기 바랍니다.',
      ],
    },
    {
      id: 8,
      category: 'apply',
      question: `그레이딩 신청 시 '카드 번호'는 어떻게 작성하나요?`,
      answer: [
        `- 대부분의 카드 번호는 카드의 뒷면에 적혀있습니다. (ex. 25 / 317 / CDA-JF 등)`,
        `- KBO 카드(SCC/슈베카 카드)번호는 앞면 하단에 '세트 이름'과 함께 적혀있습니다. (ex. SCCP1-20/T15 일 때, SCCP1-20 : 세트 이름, T15 : 카드 번호)`,
      ],
    },
    {
      id: 9,
      category: 'apply',
      question: `그레이딩 신청 시 '세트'는 어떻게 작성하나요?`,
      answer: [
        `- 카드에 세트에 관한 내용이 기재되어 있지 않은 경우에는 이베이( [https://www.ebay.com/](https://www.ebay.com/) ) 사이트에서 '브랜드 + 선수 이름 + 번호'를 검색하면 해당 카드의 세트에 관한 내용을 확인할 수 있습니다. (ex. Topps Justin Foscue CDA-JF).`,
        '- KBO 카드(SCC/슈베카 카드)는 앞면 하단 카드번호 앞에 세트에 관한 정보가 적혀 있습니다. (ex. SCCP1-20/T15 일 때, SCCP1-20 : 세트 이름, T15 : 카드 번호)',
      ],
    },
    {
      id: 10,
      category: 'apply',
      question: `그레이딩 신청 시 '카드 정보'는 어떻게 작성하나요?`,
      answer: [
        `리플렉터, 홀로, 레어, 쉬머, 레드, 오토 등의 정보를 가능한 자세히 기재하여 주시되, 확인이 어려운 경우에는 공란으로 남겨두시기 바랍니다.`,
      ],
    },
    {
      id: 11,
      category: 'apply',
      question: `포켓몬 카드 그레이딩 신청 시 '카드 번호'는 어떻게 작성하나요?`,
      answer: [
        `- 카드 번호는 일반적으로 카드 앞면에 ‘017/075’와 같은 형식으로 표기되어 있습니다.`,
        `- 프로모 카드의 카드 번호도 일반적으로 카드 앞면에 ‘093/SM-P, 136/SM-P’와 같은 형식으로 표기되어 있습니다.`,
      ],
    },
    {
      id: 12,
      category: 'apply',
      question: `포켓몬 카드 그레이딩 신청 시 '세트 이름'을 모를 경우 어떻게 작성하나요? (한글판)`,
      answer: [
        `1. 포켓몬카드게임 공식 홈페이지(https://pokemoncard.co.kr)에 접속한 후 우측 상단의 ‘카드 검색’을 클릭합니다.`,
        `2. 포켓몬 이름을 입력 후 검색합니다.`,
        `3. 표시되는 카드 중 신청 카드와 일치하는 카드를 찾아 클릭합니다.`,
        `4. 세트 정보를 확인한 후 그레이딩 신청 페이지 ‘세트 이름’에 기재합니다.`,
      ],
    },
    {
      id: 13,
      category: 'apply',
      question: `포켓몬 카드 그레이딩 신청 시 '세트 이름'을 모를 경우 어떻게 작성하나요? (영어/일어)`,
      answer: [`'카드 번호'와 '세트 번호(ex. s4a)'만 기재하시면 됩니다.`],
    },
    {
      id: 14,
      category: 'apply',
      question: `포켓몬 카드 그레이딩을 신청할 때 '카드 정보'는 어떻게 작성하나요?`,
      answer: [
        `V SR / VMAX 특일 / C / UR / CHR / EX / GX 등의 형식으로 기입하시면 됩니다.`,
      ],
    },
    {
      id: 15,
      category: 'apply',
      question: `신청서 작성 시 모르는 정보는 어떻게 해야 되나요?`,
      answer: [
        `카드 정보 작성 시 어려움이 있는 부분은 공란으로 남겨두시면 됩니다.`,
        `모든 그레이딩 대상 카드의 정보는 이미 brg 카드 데이터베이스에 저장되어 있습니다.`,
        `고객님께서 신청서에 기입하는 카드 정보는 단순히 brg 카드 데이터베이스에서 해당 카드의 정보를 불러오기 위한 용도로 이용되는 것이기 때문에 신청서에 기입한 카드 정보가 완벽하지 않더라도 문제 없습니다.`,
      ],
    },
    {
      id: 16,
      category: 'apply',
      question: `카드는 어떻게 포장해서 보내야 하나요?`,
      answer: [
        `카드를 슬리브+탑로더 혹은 슬리브+세이버 등에 넣고, 에어캡과 같은 완충재를 이용하여 카드가 상하지 않도록 안전하게 포장한 후 발송해 주시기 바랍니다.`,
        `단, 사용하신 탑로더, 슬리브 등의 액세서리는 반송해드리지 않습니다.`,
      ],
    },
    {
      id: 17,
      category: 'apply',
      question: `카드 포장 시 탑로더, 슬리브, 세이버는 어떤 것을 써야 하나요?`,
      answer: [
        `탑로더, 슬리브, 세이버와 같은 카드 악세사리는 그레이딩에 영향을 미치지 않으므로 자유롭게 사용하시면 됩니다.`,
        `다만 그레이딩 절차상 다음과 같은 문제가 발생할 수 있으니 유의하여 주시기 바랍니다.`,
        `- 탑로더 : 카드의 두께보다 두꺼운 탑로더를 사용할 경우, 카드가 탑로더에서 쉽게 분리되어 brg로 배송오는 도중에 카드가 손상될 우려가 있습니다. 따라서 카드 두께에 알맞은 탑로더를 사용하시거나 카드가 안전하게 고정될 수 있도록 팀백으로 한 번 더 감싸주시기 바랍니다.`,
        `- 슬리브 : 카드 크기에 딱 맞는 슬리브를 사용할 경우, 카드를 넣고 빼는 과정에서 손상이 생길 수 있습니다. 특히 포켓몬/바이스/디지몬 카드 박스 구매시에 증정되는 캐릭터 슬리브의 경우 카드 크기에 딱 맞는 경우가 많습니다. 카드 크기에 딱 맞는 슬리브에 카드를 보관하여 발송한 경우, brg는 카드 손상을 방지하기 위해 자체적으로 사용하는 슬리브로 교체하여 그레이딩 절차를 진행합니다. 그렇다 하더라도 카드의 손상을 최대한 방지하기 위하여 캐릭터 슬리브와 같이 카드 크기에 딱 맞는 슬리브의 사용은 지양해 주시고, 카드 크기보다 살짝 더 여유가 있는 크기의 슬리브를 사용해 주시기 바랍니다.`,
        `- 세이버 : 세이버는 어떠한 종류를 사용하여도 무방합니다. 다만, 카드를 세이버에 넣기 전에 먼저 슬리브에 꼭 넣어주시기 바랍니다.`,
      ],
    },
    {
      id: 18,
      category: 'apply',
      question: `제가 보낸 택배가 brg에 도착했다고 하는데, 아직 입고 처리가 되지 않았습니다.`,
      answer: [
        `택배사마다 택배가 도착하는 시간이 달라 모든 택배사의 택배가 도착한 후 일괄적으로 입고 처리를 진행합니다. 일반적으로 늦은 오후에 입고 처리가 진행되며, 입고 물량이 많을 경우 입고 처리가 지연될 수 있습니다. 입고 처리가 완료되면 카카오톡 안내 메시지를 드리오니 참고 부탁드립니다.`,
      ],
    },
    {
      id: 19,
      category: 'apply',
      question: `출고 처리는 언제 진행되나요?`,
      answer: [
        `일반적으로 출고 처리는 그레이딩 완료 예정일의 늦은 오후에 진행되나, 택배사의 수거 시간에 따라 변동될 수 있습니다. 출고 처리가 완료되면 카카오톡 메시지로 안내를 드린다는 점 참고 부탁드립니다.`,
      ],
    },
    {
      id: 20,
      category: 'apply',
      question: `미개봉 팩을 개봉하지 않은 채로 brg로 발송해도 되나요?`,
      answer: [
        `미개봉 팩을 보내주신 경우에는 팩을 개봉하지 않고도 팩 안에 어떤 카드가 들어있는지 확정적으로 특정할 수 있는 다음의 경우에 한하여 개봉 후 그레이딩 절차를 진행합니다.`,
        `- 1장의 카드만 들어 있는 투명한 팩 (ex. ‘통째로 삼켜진 피카츄’ 팩)`,
        `- 언제나 특정 카드만 들어 있는 불투명한 팩 (ex. ‘정글의 아이, 코코’ 팩)`,
        `단, brg는 팩의 공정상의 오류에 대하여 어떠한 책임도 지지 않으며, 개봉 후 오류 팩이라는 사실이 확인되더라도 서비스 환불 사유에 해당하지 않는 점을 유의하여 주시기 바랍니다.`,
      ],
    },
    {
      id: 21,
      category: 'grading',
      question: `라벨에 어떤 언어로 표기되나요?`,
      answer: [`카드 발매국과 언어에 관계 없이 모두 영어로 표기됩니다.`],
    },
    {
      id: 22,
      category: 'grading',
      question: `카드 진품 여부도 확인 가능한가요?`,
      answer: [
        `brg는 그레이딩 의뢰 카드의 진품 여부를 반드시 확인합니다. '보증 등' 자세한 내용은 그레이딩 서비스 이용 약관을 참조하여 주시기 바랍니다.`,
      ],
    },
    {
      id: 23,
      category: 'grading',
      question: `포켓몬 카드 한글판 뿐 아니라 일본판/영문판/중국어판도 그레이딩이 가능한가요?`,
      answer: [
        `모두 가능합니다. 일본판/영문판/중국어판 포켓몬 카드도 그레이딩 서비스 대상입니다.`,
      ],
    },
    {
      id: 24,
      category: 'grading',
      question: `저지, 패치 등이 들어간 카드도 그레이딩이 가능한가요?`,
      answer: [
        `현재 두께 35pt(0.9mm)이하의 카드만 그레이딩이 가능합니다.`,
        `그레이딩 가능 카드는 brg 사이트 '신청하기' 버튼을 클릭하면 상세히 설명되어 있으니 참고하여 주시기 바랍니다.`,
      ],
    },
    {
      id: 25,
      category: 'grading',
      question: `그레이딩이 불가능한 카드를 보냈을 땐 어떻게 되나요?`,
      answer: [
        `가품 카드를 제외한 그레이딩 불가 판정 카드는 해당 카드에 한하여 그레이딩 서비스 비용이 환불 처리됩니다.`,
        `만약 그레이딩 의뢰 카드 모두가 그레이딩 불가 대상일 경우, 전체 금액에서 반송 배송비를 차감한 금액이 환불되오니 참고하여 주시기 바랍니다.`,
      ],
    },
    {
      id: 26,
      category: 'grading',
      question: `그레이딩 결과(등급)는 언제 어떻게 확인할 수 있나요?`,
      answer: [
        `카드의 출고 처리가 완료되었다는 카카오톡 메시지를 수신하신 후, 마이페이지-주문 목록에서 그레이딩 결과를 조회하실 수 있습니다.`,
      ],
    },
    {
      category: 'cancelAndRefund',
      id: 27,
      question: `카드가 케이싱되지 않고 UNGRADABLE 라벨과 함께 왔어요. 이유가 뭔가요?`,
      answer: [
        `특정 사유로 인해 그레이딩 서비스 가능 대상이 아닌 것으로 판정된 카드일 때, 케이싱이 진행되지 않고 UNGRADABLE 라벨과 함께 발송됩니다.`,
        '그레이딩 불가 사유는 라벨 오른쪽 코드를 통해 확인 가능합니다.',
        '환불 여부에 대해서는 각 항목에 따라 변동이 있을 수 있습니다.',
        '  ● B1 - Evidence of Trimming, 커팅 : 특정한 도구를 사용해서 EDGE, CORNER의 상태를 자르거나 혹은 변형시킨 경우, 환불이 불가하며 이 평가에 대해서는 그레이더의 재량에 따라 결정한다.',
        '    ○ ex 1) EDGE가 부자연스럽게 정교하게 커팅되어 있는 경우',
        '    ○ ex 2) EDGE의 인쇄된 색깔이 커팅으로 인해 비연속적으로 보이는 경우',
        '  ● B2 - Evidence of Restoration, 복원 : 손상된 EDGE, CORNER 임의적으로 복원시킨 경우, 환불이 불가하며 이 평가에 대해서는 그레이더의 재량에 따라 결정한다.',
        '    ○ ex 1) 특정한 재료를 사용해서 손상된 CORNER 및 EDGE를 창조해내는 경우',
        '  ● B3 - Evidence of Recoloration, 인위적인 채색 : SURFACE, EDGE, CORNER에 인위적으로 색을 입힌 경우, 환불이 불가하며 이 평가에 대해서는 그레이더의 재량에 따라 결정한다.',
        '  ● B4 - Questionable Authenticity, 진품 의심 : 사내 보유 데이터에 따라 진품이 의심스러운 경우, 환불이 불가하며 이 평가에 대해서는 그레이더들의 상의 하에 재량에 따라 결정한다.',
        '  ● B5 - Evidence of Cleaning, 클리닝: 특정 물질을 사용하여 스크래치, 오염을 제거하려고 시도한 흔적이 보이는 경우, 환불이 불가하며 이 평가에 대해서는 그레이더의 재량에 따라 결정한다.',
        '  ● B6 - Mis-sized, 미스 사이즈 : 공정상 카드가 너무 크게 잘리거나, 너무 작게 잘린 경우 BRG 그레이딩 서비스 대상이 아니며, 이러한 경우는 환불이 가능하다.',
        "  ● B7 - Don't Grade, 그레이딩 불가 : 사내 보유 데이터의 부족, 그레이딩이 불가한 명확한 사유로 인해 그레이딩 불가한 경우, 환불이 가능하며 이 평가에 대해서는 그레이더의 재량에 따라 결정한다.",
        '    ○ 이러한 카드에 대해 그레이딩을 원하는 경우 공식 홈페이지의 CS 메일로 별도 문의 가능합니다.',
      ],
    },
    {
      id: 28,
      category: 'cancelAndRefund',
      question: `환불 기간은 얼마나 걸리나요?`,
      answer: [
        `고객님께서 환불 신청을 해주시면, 즉시 결제사에 결제 취소를 요청합니다.`,
        `단, 결제 수단과 결제사의 결제 취소 정책에 따라 결제 취소가 완료되기까지 최대 5 영업일이 소요될 수 있습니다.`,
      ],
    },
    {
      id: 29,
      category: 'cancelAndRefund',
      question: `그레이딩 신청 후 카드를 발송하지 않고 취소했습니다. 바로 환불이 되나요?`,
      answer: [
        `네, 카드를 발송하지 않은 상태에서는 즉시 환불이 가능합니다.`,
        `단, 결제 수단과 결제사의 결제 취소 정책에 따라 결제 취소가 완료되기까지 최대 5 영업일이 소요될 수 있습니다.`,
      ],
    },
    {
      id: 30,
      category: 'cancelAndRefund',
      question: `그레이딩 주문 취소 및 환불 요청이 가능한 시점은 언제까지인가요?`,
      answer: [
        `카드를 발송하기 전에는 주문 취소 및 환불 요청이 가능합니다.`,
        `카드를 발송한 이후에는 주문 취소 및 환불이 불가하다는 점 양해 부탁드립니다.`,
      ],
    },
    {
      id: 31,
      category: 'cancelAndRefund',
      question: `그레이딩 후 가품으로 판정된 카드들은 그레이딩 서비스 비용이 환불되나요?`,
      answer: [
        `정가품 감별은 그레이딩 프로세스의 일부입니다. 따라서 가품으로 확인된 카드의 경우 그레이딩 서비스 비용을 환불해드리지 않습니다.`,
      ],
    },
    {
      id: 32,
      category: 'cancelAndRefund',
      question: `최소 등급을 설정하고 케이싱 여부에 체크하지 않은 카드가 최소 등급에 미달하는 등급을 부여받는다면, 그레이딩 서비스 비용이 환불되나요?`,
      answer: [
        `그레이딩 서비스의 비용은 그레이딩 프로세스를 진행하는 데에 지불하시는 비용입니다. 따라서 케이싱을 선택하시지 않더라도 케이싱을 제외한 그레이딩 프로세스는 진행되므로 비용은 환불되지 않습니다.`,
      ],
    },
    {
      id: 33,
      category: 'others',
      question: `영업일은 어떤 날을 의미하나요?`,
      answer: [
        `brg의 영업일은 주말과 공휴일을 제외한 평일입니다. 모든 서비스는 영업일을 기준으로 산정하여 제공됩니다.`,
      ],
    },
    {
      id: 34,
      category: 'others',
      question: `그레이딩에 소요되는 영업일 기간은 어느 시점부터 시작되나요?`,
      answer: [
        `그레이딩 의뢰 카드가 입고 처리된 날의 다음 영업일부터 그레이딩 소요 영업일 기간이 기산됩니다.`,
        `(예를 들어, 그레이딩 의뢰 카드가 2022년 4월 1일에 입고 처리 된 경우, 익스프레스는 다음 영업일인 4월 4일부터 5영업일의 기간이 기산되고, 레귤러는 다음 영업일인 4월 4일부터 15영업일의 기간이 기산됩니다)`,
      ],
    },
    {
      id: 35,
      category: 'others',
      question: `영업일에는 명절 연휴나 대체 공휴일도 포함되나요?`,
      answer: [
        `명절 연휴와 대체 공휴일은 영업일에 해당하지 않습니다. brg의 영업일은 주말과 공휴일을 제외한 평일입니다.`,
      ],
    },
    {
      id: 36,
      category: 'others',
      question: `수령한 카드에 문제가 있습니다. (미스라벨링 등)`,
      answer: [
        `고객님께서 brg로부터 수령한 그레이딩 카드에 오류가 있을 경우, 그 사실을 brg에 5 영업일 이내에 알려주시기 바랍니다.`,
        `이후 저희 brg의 안내에 따라 해당 카드를 착불로 보내주시면 조속히 해당 카드의 오류를 확인한 후 적절한 조치를 취해 다시 발송하여 드리겠습니다.`,
        `단, 미스라벨링이 발생하는 경우라도 brg는 고객님께 별도의 손해배상책임을 부담하지는 않습니다.`,
        `또한 brg가 해당 카드에 부여한 그레이드 점수는 검토·시정 대상이 아니므로 변경될 수 없습니다.`,
        `이와 관련한 상세한 내용은 그레이딩 서비스 이용 동의 약관을 참고하여 주시기 바랍니다.`,
      ],
    },
    {
      id: 37,
      category: 'others',
      question: `brg 케이스와 PSA 케이스의 규격이 동일한가요?`,
      answer: [
        `규격이 완벽히 동일하지는 않지만, PSA 케이스의 팀백을 사용할 수 있는 정도로 규격이 유사합니다.`,
      ],
    },
    {
      id: 38,
      category: 'others',
      question: `brg 카드의 보관을 위한 팀백(비닐)을 따로 구매해야 하나요?`,
      answer: [
        `그레이딩이 완료된 카드는 brg가 자체 제작한 팀백에 담아 고객님께 발송해 드리오니, 고객님께서 별도로 팀백을 구매하실 필요가 없습니다.`,
        `수령 후 보관상의 이유로 팀백이 오염, 훼손되어 교체가 필요한 경우, 시중에서 brg/PSA용 팀백을 구매하셔서 사용하시면 됩니다.`,
      ],
    },
    {
      id: 39,
      category: 'others',
      question: `궁금한 점이 있습니다. 어디로 문의 드리면 되나요?`,
      answer: [
        `카카오톡 채널(ID : @breakncompany) 채팅으로 문의 주시면 운영 시간 내에 순차적으로 답변 드리고 있습니다.`,
        `brg 사이트 메인페이지 하단 '카카오톡 채팅으로 문의하기'를 클릭하면 바로 연결되며, 카카오톡 채널에서 'break'를 검색 후 메시지를 보내는 것도 가능합니다.`,
      ],
    },
    {
      id: 40,
      category: 'others',
      question: `brg의 소식을 받아볼 수 있는 방법이 있나요?`,
      answer: [
        `공식 인스타그램 '@brgcard'를 팔로우하시면 brg의 소식을 빠르게 받아보실 수 있습니다.`,
      ],
    },
    {
      id: 41,
      category: 'others',
      question: `brg에서 사용하는 팀백을 구매할 수 있을까요?`,
      answer: [
        `저희는 팀백을 자체 제작하여 사용하므로, 저희가 사용하는 팀백은 시중에서 구매하실 수 없습니다. 다만, brg의 케이스는 PSA의 케이스 사이즈와 유사하므로 시중에서 PSA용 팀백을 구매하셔서 사용하시면 됩니다.`,
      ],
    },
    {
      id: 42,
      category: 'grading',
      question: `brg 리홀더 서비스가 무엇인가요?`,
      answer: [
        `brg 리홀더 서비스는 기존에 그레이딩된 brg 카드를 새 케이스로 교체하는 프로세스입니다.`,
      ],
    },
    {
      id: 43,
      category: 'grading',
      question: `리홀더 서비스를 왜 받는 것인가요?`,
      answer: [
        `리홀더 서비스는 일반적으로 손상된 brg 케이스를 새 케이스로 교체하거나, 라벨을 최신화하기 위해 활용됩니다.`,
      ],
    },
    {
      id: 44,
      category: 'grading',
      question: `다른 회사 그레이딩 제품을 리홀더 서비스로 보내면 안 되나요?`,
      answer: [`brg 리홀더 서비스는 brg 그레이딩 카드만 대상으로 진행됩니다.`],
    },
  ],
  en: [
    {
      id: 1,
      category: 'guideline',
      question: 'Why should you submit your cards with BRG?',
      answer: [
        `- Quality Guaranteed: BRG offers a 12-step grading process to guarantee that every card submitted to us is graded fairly and consistently. Every card we grade will receive a grade based only on the card's condition. We strive to create a fair and trustworthy ecosystem for trading cards by consistently grading all cards submitted to us.`,
        `- BRG's unique slab: After grading is complete, BRG will encase your graded card in a translucent and durable case to best protect your card.`,
        `- Extensive online database: BRG provides an extensive online database on which you can research any card.`,
      ],
    },
    {
      id: 2,
      category: 'guideline',
      question: 'How to submit',
      answer: [
        `Check out https://break.co.kr/partners and submit your cards to any official partner card shop near you.`,
        `BRG only accepts international submissions through BRG's official partners at this moment.`,
      ],
    },
    {
      id: 3,
      category: 'apply',
      question: 'How should I pack my cards for submission?',
      answer: [
        `Place your card in a card-saver or a toploader cover with a team bag. Please pack your cards safely to make sure that your cards will not be damaged during shipping.`,
      ],
    },
    {
      id: 4,
      category: 'apply',
      question: 'How should I prepare my cards for submission?',
      answer: [
        `Place your cards in a card-saver and send or drop off your card to BRG's official partner card shop near you.`,
      ],
    },
    {
      id: 5,
      category: 'grading',
      question: 'Which language will the BRG label be in?',
      answer: [
        `The slab will be labeled in English, except for the parts originally in another language.`,
      ],
    },
    {
      id: 6,
      category: 'grading',
      question: 'Does BRG screen the authenticity of the cards?',
      answer: [
        `BRG screens for authenticity of every card submitted to us. If you submit counterfeit cards to be graded, we will return the cards back to you. We will NOT refund the amount.`,
      ],
    },
    {
      id: 7,
      category: 'grading',
      question: `Can I view my cards' grade online before receiving the cards?`,
      answer: [
        `The online viewing service is currently not available for international orders. With our short turnaround time, it won't be long for you to discover the card's grade in person!`,
      ],
    },
    {
      id: 8,
      category: 'grading',
      question: `What types of cards does BRG grade?`,
      answer: [
        `※ As of November 15th, 2021, we are only accepting cards printed since 1999. However, in the case of Pokémon cards, we accept all official-released Pokémon cards regardless of the year they were printed.`,
        `※ only SCC / Superbaseball Card, Pokémon cards, and 2.5 x 3.5-inch standard cards can be graded at this time`,
        `※ Thickness must be 35pt (0.9mm) or thinner.`,
        `- Baseball cards`,
        `- Basketball cards`,
        `- Football cards`,
        `- Hockey cards`,
        `- Wrestling cards`,
        `- Racing cards`,
        `- Soccer cards`,
        `- Golf cards`,
        `- Tennis cards`,
        `- MMA/WNBA/Multi-sports card`,
        `- Pokémon`,
        `- MTG`,
        `- Dragon ball`,
        `- Weiss Schwarz`,
        `- Entertainment cards`,
        `- Taiwanese cheerleading cards`,
        `- Hong Kong Yes Card`,
      ],
    },
    {
      id: 9,
      category: 'grading',
      question: `What types of cards does BRG not grade?`,
      answer: [
        `- 1952 Topps Mickey Mantle`,
        `- 1979 O-Pee-Chee`,
        `- Topps Gretzkys`,
        `- 1986&1987 Fleer Michael Jordan`,
        `- 2000 Fleer Ultra Polychrome Desert Shield Cards`,
        `- 2001 Fleer Legacy Albert Pujols Autograph`,
        `- 1998 Topps Series 2 Kobe Bryant Autograph`,
        `- 1998-1999 Skybox Premium Autographics Tim Duncan Auto`,
        `- 1999/2000 Skybox Premium Autographics David Robinson Auto`,
        `- 2000 Upper Deck Ovation Kobe Bryant Scoreboard Cards`,
        `- 2002 Rookie Review (Cards are on sheets in magazine)`,
        `- 2002-03 Upper Deck Sweet Shot Off The Glass inserts`,
        `- 2003 Sage LeBron James (Card is on sheet in magazine)`,
        `- 2007 Topps Rookie Premiere Autographs`,
        `- 2016 Panini Prizm Dak Prescott Rookie Auto (Autopen, every variation)`,
        `- 2016 Panini Prizm Dak Prescott/Devontae Booker Dual Auto/Jersey /99`,
        `- All years (2000-2015) Topps Rookie Premiere/ (03/04 -08/09)/Topps Photo Shoot(2006-2007-2010) /Topps AFLAC Autographs (Unless serial numbered)`,
        `- All years (1996-1997) Scoreboard/ (1991-1995) Classic/ (1991-1992) Front Row/ (1991-1992) Little Sun Autographs of Shaquille O’Neal/Kobe Bryant/Derek Jeter`,
        `- Any Buyback autographed cards from Upper Deck without UDA verification`,
        `- Autographed card without any adequate certification`,
        `- Any custom-printed card`,
        `- Any card that has not been officially released`,
        `- Cards released by Sage`,
      ],
    },
    {
      id: 10,
      category: 'others',
      question: `What can I do if I receive a defective slab (mis-labeled) from BRG?`,
      answer: [
        `If there is any defect with a slab, you can send it back to us through our official partner shops for re-holder service at no additional cost. (Note: the card's grade may change)`,
      ],
    },
    {
      id: 11,
      category: 'others',
      question: `Do customers need to separately prepare sleeves for their BRG slabs?`,
      answer: [
        `BRG will provide a perfect-fitting slab sleeve for each slab when we ship your cards back.`,
      ],
    },
    {
      id: 12,
      category: 'others',
      question: `How can I contact BRG?`,
      answer: [`E-mail us your comments and questions at cs@break.co.kr`],
    },
    {
      id: 13,
      category: 'others',
      question: `Where can I get more news about BRG?`,
      answer: [
        `Follow us on instagram @brgcard or check out our official website.`,
      ],
    },
    {
      id: 14,
      category: 'others',
      question: `How can I get a refund?`,
      answer: [
        `You can get a refund directly from the BRG official partner store you submitted your cards to.`,
      ],
    },
  ],
  tw: [
    {
      id: 1,
      category: 'apply',
      question: '어떤 택배사를 이용하시나요?',
      answer: [
        'CJ 대한통운을 이용하며, 상황에 따라 우체국 택배를 이용하기도 합니다. 택배사는 출고 처리 후 송장번호와 함께 조회 가능합니다.',
      ],
    },
    {
      id: 2,
      category: 'apply',
      question: '상품은 언제 받아볼 수 있나요?',
      answer: [
        `출고 날짜를 기준으로 보통 2-3일 이내에 수령 가능합니다.`,
        `단, 택배사의 사정에 따라 배송기간이 지연될 수 있습니다.`,
      ],
    },
    {
      id: 3,
      category: 'apply',
      question: '출고 예정일은 어떻게 결정되는 건가요?',
      answer: [
        '출고예정일은 그레이딩 의뢰 카드가 입고 처리된 날의 다음 영업일부터 5영업일(익스프레스를 신청한 경우) 또는 15영업일(레귤러를 신청한 경우)이 경과한 날입니다.',
        '(예를 들어, 그레이딩 의뢰 카드가 2022년 4월 1일에 입고 처리된 경우, 익스프레스는 다음 영업일인 4월 4일부터 5영업일이 지난 4월 8일이 출고예정일이고, 레귤러는 다음 영업일인 4월 4일부터 15영업일이 지난 4월 22일이 출고예정일입니다)',
      ],
    },
    {
      id: 4,
      category: 'apply',
      question: '방문 접수 및 방문 수령이 가능한가요?',
      answer: [
        'brg의 그레이딩 프로세스는 보안사항으로 블라인드로 진행되기에 방문 접수 및 수령은 불가합니다.',
      ],
    },
    {
      id: 5,
      category: 'apply',
      question: '그레이딩 신청 시 어떤 언어로 작성해야 하나요?',
      answer: [
        '카드에 기재된 언어와 관계 없이 한글 또는 영어로 작성하면 됩니다.',
      ],
    },
    {
      id: 6,
      category: 'apply',
      question:
        '이미 카드를 발송했는데 카드 정보(카드 번호, 세트 이름 등)를 잘못 기입했습니다. 어떻게 해야 하나요?',
      answer: [
        '그레이딩 신청서에 카드 정보를 부정확하게 기입하였더라도, brg가 올바르게 수정하여 그레이딩을 시작합니다.',
        '모든 그레이딩 대상 카드의 정보는 brg 카드 데이터베이스에 저장되어 있습니다.',
        '고객님께서 신청서에 기입하는 카드 정보는 단순히 brg 카드 데이터베이스에서 해당 카드의 정보를 불러오기 위한 용도로 이용되는 것이기 때문에 신청서에 기입한 카드 정보가 완벽하지 않더라도 문제 없습니다.',
      ],
    },
    {
      id: 7,
      category: 'apply',
      question:
        '실수로 그레이딩 신청 카드와 다른 카드를 발송했습니다. 어떻게 해야 하나요?',
      answer: [
        '그레이딩은 brg가 실제로 수령한 카드를 대상으로 이루어집니다.',
        '따라서 고객님께서 실수로 그레이딩 신청 카드와 다른 카드를 발송한 경우에는, brg는 실제로 수령한 카드를 대상으로 새로이 카드 정보를 입력하여 그레이딩 절차를 진행합니다.',
        '카드 오발송에 대하여 고객님께 별도로 고지하여 드리지 않으니, 이 점 유의하여 주시기 바랍니다.',
      ],
    },
    {
      id: 8,
      category: 'apply',
      question: `그레이딩 신청 시 '카드 번호'는 어떻게 작성하나요?`,
      answer: [
        `- 대부분의 카드 번호는 카드의 뒷면에 적혀있습니다. (ex. 25 / 317 / CDA-JF 등)`,
        `- KBO 카드(SCC/슈베카 카드)번호는 앞면 하단에 '세트 이름'과 함께 적혀있습니다. (ex. SCCP1-20/T15 일 때, SCCP1-20 : 세트 이름, T15 : 카드 번호)`,
      ],
    },
    {
      id: 9,
      category: 'apply',
      question: `그레이딩 신청 시 '세트'는 어떻게 작성하나요?`,
      answer: [
        `- 카드에 세트에 관한 내용이 기재되어 있지 않은 경우에는 이베이( [https://www.ebay.com/](https://www.ebay.com/) ) 사이트에서 '브랜드 + 선수 이름 + 번호'를 검색하면 해당 카드의 세트에 관한 내용을 확인할 수 있습니다. (ex. Topps Justin Foscue CDA-JF).`,
        '- KBO 카드(SCC/슈베카 카드)는 앞면 하단 카드번호 앞에 세트에 관한 정보가 적혀 있습니다. (ex. SCCP1-20/T15 일 때, SCCP1-20 : 세트 이름, T15 : 카드 번호)',
      ],
    },
    {
      id: 10,
      category: 'apply',
      question: `그레이딩 신청 시 '카드 정보'는 어떻게 작성하나요?`,
      answer: [
        `리플렉터, 홀로, 레어, 쉬머, 레드, 오토 등의 정보를 가능한 자세히 기재하여 주시되, 확인이 어려운 경우에는 공란으로 남겨두시기 바랍니다.`,
      ],
    },
    {
      id: 11,
      category: 'apply',
      question: `포켓몬 카드 그레이딩 신청 시 '카드 번호'는 어떻게 작성하나요?`,
      answer: [
        `- 카드 번호는 일반적으로 카드 앞면에 ‘017/075’와 같은 형식으로 표기되어 있습니다.`,
        `- 프로모 카드의 카드 번호도 일반적으로 카드 앞면에 ‘093/SM-P, 136/SM-P’와 같은 형식으로 표기되어 있습니다.`,
      ],
    },
    {
      id: 12,
      category: 'apply',
      question: `포켓몬 카드 그레이딩 신청 시 '세트 이름'을 모를 경우 어떻게 작성하나요? (한글판)`,
      answer: [
        `1. 포켓몬카드게임 공식 홈페이지(https://pokemoncard.co.kr)에 접속한 후 우측 상단의 ‘카드 검색’을 클릭합니다.`,
        `2. 포켓몬 이름을 입력 후 검색합니다.`,
        `3. 표시되는 카드 중 신청 카드와 일치하는 카드를 찾아 클릭합니다.`,
        `4. 세트 정보를 확인한 후 그레이딩 신청 페이지 ‘세트 이름’에 기재합니다.`,
      ],
    },
    {
      id: 13,
      category: 'apply',
      question: `포켓몬 카드 그레이딩 신청 시 '세트 이름'을 모를 경우 어떻게 작성하나요? (영어/일어)`,
      answer: [`'카드 번호'와 '세트 번호(ex. s4a)'만 기재하시면 됩니다.`],
    },
    {
      id: 14,
      category: 'apply',
      question: `포켓몬 카드 그레이딩을 신청할 때 '카드 정보'는 어떻게 작성하나요?`,
      answer: [
        `V SR / VMAX 특일 / C / UR / CHR / EX / GX 등의 형식으로 기입하시면 됩니다.`,
      ],
    },
    {
      id: 15,
      category: 'apply',
      question: `신청서 작성 시 모르는 정보는 어떻게 해야 되나요?`,
      answer: [
        `카드 정보 작성 시 어려움이 있는 부분은 공란으로 남겨두시면 됩니다.`,
        `모든 그레이딩 대상 카드의 정보는 이미 brg 카드 데이터베이스에 저장되어 있습니다.`,
        `고객님께서 신청서에 기입하는 카드 정보는 단순히 brg 카드 데이터베이스에서 해당 카드의 정보를 불러오기 위한 용도로 이용되는 것이기 때문에 신청서에 기입한 카드 정보가 완벽하지 않더라도 문제 없습니다.`,
      ],
    },
    {
      id: 16,
      category: 'apply',
      question: `카드는 어떻게 포장해서 보내야 하나요?`,
      answer: [
        `카드를 슬리브+탑로더 혹은 슬리브+세이버 등에 넣고, 에어캡과 같은 완충재를 이용하여 카드가 상하지 않도록 안전하게 포장한 후 발송해 주시기 바랍니다.`,
        `단, 사용하신 탑로더, 슬리브 등의 액세서리는 반송해드리지 않습니다.`,
      ],
    },
    {
      id: 17,
      category: 'apply',
      question: `카드 포장 시 탑로더, 슬리브, 세이버는 어떤 것을 써야 하나요?`,
      answer: [
        `탑로더, 슬리브, 세이버와 같은 카드 악세사리는 그레이딩에 영향을 미치지 않으므로 자유롭게 사용하시면 됩니다.`,
        `다만 그레이딩 절차상 다음과 같은 문제가 발생할 수 있으니 유의하여 주시기 바랍니다.`,
        `- 탑로더 : 카드의 두께보다 두꺼운 탑로더를 사용할 경우, 카드가 탑로더에서 쉽게 분리되어 brg로 배송오는 도중에 카드가 손상될 우려가 있습니다. 따라서 카드 두께에 알맞은 탑로더를 사용하시거나 카드가 안전하게 고정될 수 있도록 팀백으로 한 번 더 감싸주시기 바랍니다.`,
        `- 슬리브 : 카드 크기에 딱 맞는 슬리브를 사용할 경우, 카드를 넣고 빼는 과정에서 손상이 생길 수 있습니다. 특히 포켓몬/바이스/디지몬 카드 박스 구매시에 증정되는 캐릭터 슬리브의 경우 카드 크기에 딱 맞는 경우가 많습니다. 카드 크기에 딱 맞는 슬리브에 카드를 보관하여 발송한 경우, brg는 카드 손상을 방지하기 위해 자체적으로 사용하는 슬리브로 교체하여 그레이딩 절차를 진행합니다. 그렇다 하더라도 카드의 손상을 최대한 방지하기 위하여 캐릭터 슬리브와 같이 카드 크기에 딱 맞는 슬리브의 사용은 지양해 주시고, 카드 크기보다 살짝 더 여유가 있는 크기의 슬리브를 사용해 주시기 바랍니다.`,
        `- 세이버 : 세이버는 어떠한 종류를 사용하여도 무방합니다. 다만, 카드를 세이버에 넣기 전에 먼저 슬리브에 꼭 넣어주시기 바랍니다.`,
      ],
    },
    {
      id: 18,
      category: 'apply',
      question: `제가 보낸 택배가 brg에 도착했다고 하는데, 아직 입고 처리가 되지 않았습니다.`,
      answer: [
        `택배사마다 택배가 도착하는 시간이 달라 모든 택배사의 택배가 도착한 후 일괄적으로 입고 처리를 진행합니다. 일반적으로 늦은 오후에 입고 처리가 진행되며, 입고 물량이 많을 경우 입고 처리가 지연될 수 있습니다. 입고 처리가 완료되면 카카오톡 안내 메시지를 드리오니 참고 부탁드립니다.`,
      ],
    },
    {
      id: 19,
      category: 'apply',
      question: `출고 처리는 언제 진행되나요?`,
      answer: [
        `일반적으로 출고 처리는 그레이딩 완료 예정일의 늦은 오후에 진행되나, 택배사의 수거 시간에 따라 변동될 수 있습니다. 출고 처리가 완료되면 카카오톡 메시지로 안내를 드린다는 점 참고 부탁드립니다.`,
      ],
    },
    {
      id: 20,
      category: 'apply',
      question: `미개봉 팩을 개봉하지 않은 채로 brg로 발송해도 되나요?`,
      answer: [
        `미개봉 팩을 보내주신 경우에는 팩을 개봉하지 않고도 팩 안에 어떤 카드가 들어있는지 확정적으로 특정할 수 있는 다음의 경우에 한하여 개봉 후 그레이딩 절차를 진행합니다.`,
        `- 1장의 카드만 들어 있는 투명한 팩 (ex. ‘통째로 삼켜진 피카츄’ 팩)`,
        `- 언제나 특정 카드만 들어 있는 불투명한 팩 (ex. ‘정글의 아이, 코코’ 팩)`,
        `단, brg는 팩의 공정상의 오류에 대하여 어떠한 책임도 지지 않으며, 개봉 후 오류 팩이라는 사실이 확인되더라도 서비스 환불 사유에 해당하지 않는 점을 유의하여 주시기 바랍니다.`,
      ],
    },
    {
      id: 21,
      category: 'grading',
      question: `라벨에 어떤 언어로 표기되나요?`,
      answer: [`카드 발매국과 언어에 관계 없이 모두 영어로 표기됩니다.`],
    },
    {
      id: 22,
      category: 'grading',
      question: `카드 진품 여부도 확인 가능한가요?`,
      answer: [
        `brg는 그레이딩 의뢰 카드의 진품 여부를 반드시 확인합니다. '보증 등' 자세한 내용은 그레이딩 서비스 이용 약관을 참조하여 주시기 바랍니다.`,
      ],
    },
    {
      id: 23,
      category: 'grading',
      question: `포켓몬 카드 한글판 뿐 아니라 일본판/영문판/중국어판도 그레이딩이 가능한가요?`,
      answer: [
        `모두 가능합니다. 일본판/영문판/중국어판 포켓몬 카드도 그레이딩 서비스 대상입니다.`,
      ],
    },
    {
      id: 24,
      category: 'grading',
      question: `저지, 패치 등이 들어간 카드도 그레이딩이 가능한가요?`,
      answer: [
        `현재 두께 35pt(0.9mm)이하의 카드만 그레이딩이 가능합니다.`,
        `그레이딩 가능 카드는 brg 사이트 '신청하기' 버튼을 클릭하면 상세히 설명되어 있으니 참고하여 주시기 바랍니다.`,
      ],
    },
    {
      id: 25,
      category: 'grading',
      question: `그레이딩이 불가능한 카드를 보냈을 땐 어떻게 되나요?`,
      answer: [
        `가품 카드를 제외한 그레이딩 불가 판정 카드는 해당 카드에 한하여 그레이딩 서비스 비용이 환불 처리됩니다.`,
        `만약 그레이딩 의뢰 카드 모두가 그레이딩 불가 대상일 경우, 전체 금액에서 반송 배송비를 차감한 금액이 환불되오니 참고하여 주시기 바랍니다.`,
      ],
    },
    {
      id: 26,
      category: 'grading',
      question: `그레이딩 결과(등급)는 언제 어떻게 확인할 수 있나요?`,
      answer: [
        `카드의 출고 처리가 완료되었다는 카카오톡 메시지를 수신하신 후, 마이페이지-주문 목록에서 그레이딩 결과를 조회하실 수 있습니다.`,
      ],
    },
    {
      category: 'cancelAndRefund',
      id: 27,
      question: `카드가 케이싱되지 않고 UNGRADABLE 라벨과 함께 왔어요. 이유가 뭔가요?`,
      answer: [
        `특정 사유로 인해 그레이딩 서비스 가능 대상이 아닌 것으로 판정된 카드일 때, 케이싱이 진행되지 않고 UNGRADABLE 라벨과 함께 발송됩니다.`,
        '그레이딩 불가 사유는 라벨 오른쪽 코드를 통해 확인 가능합니다.',
        '환불 여부에 대해서는 각 항목에 따라 변동이 있을 수 있습니다.',
        '  ● B1 - Evidence of Trimming, 커팅 : 특정한 도구를 사용해서 EDGE, CORNER의 상태를 자르거나 혹은 변형시킨 경우, 환불이 불가하며 이 평가에 대해서는 그레이더의 재량에 따라 결정한다.',
        '    ○ ex 1) EDGE가 부자연스럽게 정교하게 커팅되어 있는 경우',
        '    ○ ex 2) EDGE의 인쇄된 색깔이 커팅으로 인해 비연속적으로 보이는 경우',
        '  ● B2 - Evidence of Restoration, 복원 : 손상된 EDGE, CORNER 임의적으로 복원시킨 경우, 환불이 불가하며 이 평가에 대해서는 그레이더의 재량에 따라 결정한다.',
        '    ○ ex 1) 특정한 재료를 사용해서 손상된 CORNER 및 EDGE를 창조해내는 경우',
        '  ● B3 - Evidence of Recoloration, 인위적인 채색 : SURFACE, EDGE, CORNER에 인위적으로 색을 입힌 경우, 환불이 불가하며 이 평가에 대해서는 그레이더의 재량에 따라 결정한다.',
        '  ● B4 - Questionable Authenticity, 진품 의심 : 사내 보유 데이터에 따라 진품이 의심스러운 경우, 환불이 불가하며 이 평가에 대해서는 그레이더들의 상의 하에 재량에 따라 결정한다.',
        '  ● B5 - Evidence of Cleaning, 클리닝: 특정 물질을 사용하여 스크래치, 오염을 제거하려고 시도한 흔적이 보이는 경우, 환불이 불가하며 이 평가에 대해서는 그레이더의 재량에 따라 결정한다.',
        '  ● B6 - Mis-sized, 미스 사이즈 : 공정상 카드가 너무 크게 잘리거나, 너무 작게 잘린 경우 BRG 그레이딩 서비스 대상이 아니며, 이러한 경우는 환불이 가능하다.',
        "  ● B7 - Don't Grade, 그레이딩 불가 : 사내 보유 데이터의 부족, 그레이딩이 불가한 명확한 사유로 인해 그레이딩 불가한 경우, 환불이 가능하며 이 평가에 대해서는 그레이더의 재량에 따라 결정한다.",
        '    ○ 이러한 카드에 대해 그레이딩을 원하는 경우 공식 홈페이지의 CS 메일로 별도 문의 가능합니다.',
      ],
    },
    {
      id: 28,
      category: 'cancelAndRefund',
      question: `환불 기간은 얼마나 걸리나요?`,
      answer: [
        `고객님께서 환불 신청을 해주시면, 즉시 결제사에 결제 취소를 요청합니다.`,
        `단, 결제 수단과 결제사의 결제 취소 정책에 따라 결제 취소가 완료되기까지 최대 5 영업일이 소요될 수 있습니다.`,
      ],
    },
    {
      id: 29,
      category: 'cancelAndRefund',
      question: `그레이딩 신청 후 카드를 발송하지 않고 취소했습니다. 바로 환불이 되나요?`,
      answer: [
        `네, 카드를 발송하지 않은 상태에서는 즉시 환불이 가능합니다.`,
        `단, 결제 수단과 결제사의 결제 취소 정책에 따라 결제 취소가 완료되기까지 최대 5 영업일이 소요될 수 있습니다.`,
      ],
    },
    {
      id: 30,
      category: 'cancelAndRefund',
      question: `그레이딩 주문 취소 및 환불 요청이 가능한 시점은 언제까지인가요?`,
      answer: [
        `카드를 발송하기 전에는 주문 취소 및 환불 요청이 가능합니다.`,
        `카드를 발송한 이후에는 주문 취소 및 환불이 불가하다는 점 양해 부탁드립니다.`,
      ],
    },
    {
      id: 31,
      category: 'cancelAndRefund',
      question: `그레이딩 후 가품으로 판정된 카드들은 그레이딩 서비스 비용이 환불되나요?`,
      answer: [
        `정가품 감별은 그레이딩 프로세스의 일부입니다. 따라서 가품으로 확인된 카드의 경우 그레이딩 서비스 비용을 환불해드리지 않습니다.`,
      ],
    },
    {
      id: 32,
      category: 'cancelAndRefund',
      question: `최소 등급을 설정하고 케이싱 여부에 체크하지 않은 카드가 최소 등급에 미달하는 등급을 부여받는다면, 그레이딩 서비스 비용이 환불되나요?`,
      answer: [
        `그레이딩 서비스의 비용은 그레이딩 프로세스를 진행하는 데에 지불하시는 비용입니다. 따라서 케이싱을 선택하시지 않더라도 케이싱을 제외한 그레이딩 프로세스는 진행되므로 비용은 환불되지 않습니다.`,
      ],
    },
    {
      id: 33,
      category: 'others',
      question: `영업일은 어떤 날을 의미하나요?`,
      answer: [
        `brg의 영업일은 주말과 공휴일을 제외한 평일입니다. 모든 서비스는 영업일을 기준으로 산정하여 제공됩니다.`,
      ],
    },
    {
      id: 34,
      category: 'others',
      question: `그레이딩에 소요되는 영업일 기간은 어느 시점부터 시작되나요?`,
      answer: [
        `그레이딩 의뢰 카드가 입고 처리된 날의 다음 영업일부터 그레이딩 소요 영업일 기간이 기산됩니다.`,
        `(예를 들어, 그레이딩 의뢰 카드가 2022년 4월 1일에 입고 처리 된 경우, 익스프레스는 다음 영업일인 4월 4일부터 5영업일의 기간이 기산되고, 레귤러는 다음 영업일인 4월 4일부터 15영업일의 기간이 기산됩니다)`,
      ],
    },
    {
      id: 35,
      category: 'others',
      question: `영업일에는 명절 연휴나 대체 공휴일도 포함되나요?`,
      answer: [
        `명절 연휴와 대체 공휴일은 영업일에 해당하지 않습니다. brg의 영업일은 주말과 공휴일을 제외한 평일입니다.`,
      ],
    },
    {
      id: 36,
      category: 'others',
      question: `수령한 카드에 문제가 있습니다. (미스라벨링 등)`,
      answer: [
        `고객님께서 brg로부터 수령한 그레이딩 카드에 오류가 있을 경우, 그 사실을 brg에 5 영업일 이내에 알려주시기 바랍니다.`,
        `이후 저희 brg의 안내에 따라 해당 카드를 착불로 보내주시면 조속히 해당 카드의 오류를 확인한 후 적절한 조치를 취해 다시 발송하여 드리겠습니다.`,
        `단, 미스라벨링이 발생하는 경우라도 brg는 고객님께 별도의 손해배상책임을 부담하지는 않습니다.`,
        `또한 brg가 해당 카드에 부여한 그레이드 점수는 검토·시정 대상이 아니므로 변경될 수 없습니다.`,
        `이와 관련한 상세한 내용은 그레이딩 서비스 이용 동의 약관을 참고하여 주시기 바랍니다.`,
      ],
    },
    {
      id: 37,
      category: 'others',
      question: `brg 케이스와 PSA 케이스의 규격이 동일한가요?`,
      answer: [
        `규격이 완벽히 동일하지는 않지만, PSA 케이스의 팀백을 사용할 수 있는 정도로 규격이 유사합니다.`,
      ],
    },
    {
      id: 38,
      category: 'others',
      question: `brg 카드의 보관을 위한 팀백(비닐)을 따로 구매해야 하나요?`,
      answer: [
        `그레이딩이 완료된 카드는 brg가 자체 제작한 팀백에 담아 고객님께 발송해 드리오니, 고객님께서 별도로 팀백을 구매하실 필요가 없습니다.`,
        `수령 후 보관상의 이유로 팀백이 오염, 훼손되어 교체가 필요한 경우, 시중에서 brg/PSA용 팀백을 구매하셔서 사용하시면 됩니다.`,
      ],
    },
    {
      id: 39,
      category: 'others',
      question: `궁금한 점이 있습니다. 어디로 문의 드리면 되나요?`,
      answer: [
        `카카오톡 채널(ID : @breakncompany) 채팅으로 문의 주시면 운영 시간 내에 순차적으로 답변 드리고 있습니다.`,
        `brg 사이트 메인페이지 하단 '카카오톡 채팅으로 문의하기'를 클릭하면 바로 연결되며, 카카오톡 채널에서 'break'를 검색 후 메시지를 보내는 것도 가능합니다.`,
      ],
    },
    {
      id: 40,
      category: 'others',
      question: `brg의 소식을 받아볼 수 있는 방법이 있나요?`,
      answer: [
        `공식 인스타그램 '@brgcard'를 팔로우하시면 brg의 소식을 빠르게 받아보실 수 있습니다.`,
      ],
    },
    {
      id: 41,
      category: 'others',
      question: `brg에서 사용하는 팀백을 구매할 수 있을까요?`,
      answer: [
        `저희는 팀백을 자체 제작하여 사용하므로, 저희가 사용하는 팀백은 시중에서 구매하실 수 없습니다. 다만, brg의 케이스는 PSA의 케이스 사이즈와 유사하므로 시중에서 PSA용 팀백을 구매하셔서 사용하시면 됩니다.`,
      ],
    },
    {
      id: 42,
      category: 'grading',
      question: `brg 리홀더 서비스가 무엇인가요?`,
      answer: [
        `brg 리홀더 서비스는 기존에 그레이딩된 brg 카드를 새 케이스로 교체하는 프로세스입니다.`,
      ],
    },
    {
      id: 43,
      category: 'grading',
      question: `리홀더 서비스를 왜 받는 것인가요?`,
      answer: [
        `리홀더 서비스는 일반적으로 손상된 brg 케이스를 새 케이스로 교체하거나, 라벨을 최신화하기 위해 활용됩니다.`,
      ],
    },
    {
      id: 44,
      category: 'grading',
      question: `다른 회사 그레이딩 제품을 리홀더 서비스로 보내면 안 되나요?`,
      answer: [`brg 리홀더 서비스는 brg 그레이딩 카드만 대상으로 진행됩니다.`],
    },
  ],
};
