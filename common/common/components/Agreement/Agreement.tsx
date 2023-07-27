import { Box, Container, Divider, Typography } from '@mui/material';

function Agreement() {
  return (
    <Box
      bgcolor="#fff"
      sx={{
        paddingTop: { xs: '64px', sm: '104px' },
        wordBreak: 'keep-all',
      }}
    >
      <Container maxWidth="sm">
        <Box py={1}>
          <Typography variant="h4" fontWeight={700}>
            이용약관
          </Typography>
        </Box>
        <Divider />
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 1 조 (목적)
          </Typography>
          <Typography variant="body2" paragraph>
            이 약관은 (주)브레이크앤컴퍼니(이하 “회사”)가 운영하는 인터넷 관련
            서비스(이하 “서비스”)를 이용함에 있어 회사와 이용자의 권리·의무 및
            책임사항을 규정함을 목적으로 합니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 2 조 (정의)
          </Typography>
          <Typography variant="body2" paragraph>
            1. “사이트”란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여
            컴퓨터, 모바일 등 정보통신 설비를 이용하여 재화 또는 용역을 거래할
            수 있도록 설정한 가상의 영업장 또는 회사가 운영하는 웹사이트, 모바일
            웹, 앱 등의 서비스를 제공하는 모든 매체를 통칭합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. “이용자”란 “사이트”에 접속하여 이 약관에 따라 “사이트”가 제공하는
            서비스를 받는 회원 및 비회원을 말합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            3. “회원”이라 함은 “사이트”에 회원 등록을 한 자로서, “사이트”의
            정보를 지속적으로 제공받으며, “사이트”가 제공하는 서비스를
            계속적으로 이용할 수 있는 자를 말합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            4. “비회원”이라 함은 회원에 가입하지 않고 “사이트”가 제공하는
            서비스를 이용하는 자를 말합니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 3 조 (약관 등의 명시와 설명 및 개정)
          </Typography>
          <Typography variant="body2" paragraph>
            1. 회사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지
            주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호,
            전자우편 주소, 사업자등록번호, 통신판매업 신고번호, 개인정보 관리
            책임자 등을 이용자가 쉽게 알 수 있도록 사이트의 초기화면(전면)에
            게시합니다. 다만, 약관의 내용은 이용자가 연결 화면을 통하여 볼 수
            있도록 할 수 있습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 회사는 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용
            중 청약 철회, 배송 책임, 환불 조건 등과 같은 중요한 내용을 이용자가
            이해할 수 있도록 별도의 연결 화면 또는 팝업 화면 등을 제공하여
            이용자의 확인을 구하여야 합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            3. 회사는 「전자상거래 등에서의 소비자 보호에 관한 법률」, 「약관의
            규제에 관한 법률」, 「전자거래기본법」, 「전자서명법」, 「정보통신망
            이용 촉진 등에 관한 법률」, 「방문판매 등에 관한 법률」,
            「소비자보호법」 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할
            수 있습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            4. 회사가 이 약관을 개정하는 경우에는 개정된 약관의 적용일자 및
            개정사유를 명시하여 현행 약관과 함께 그 적용일자 7일 이전부터
            적용일자 전일까지 위 제1항의 방법으로 공지합니다. 개정된 약관은
            적용일자 이전으로 소급하여 적용되지 아니합니다. 다만, 이용자에게
            불리한 약관의 개정은 그 적용일자 30일 이전부터 적용일자 전일까지
            제1항의 방법 외에 서비스 내 전자우편, 로그인 시 동의 요구 팝업창
            등의 전자적 수단을 통하여 따로 명확히 통지하도록 합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            5. 회사가 전항에 따라 개정 약관을 공지 또는 통지하면서 이용자에게
            30일 기간 내에 의사 표시를 하지 않으면 의사 표시가 표명된 것으로
            본다는 뜻을 명확하게 공지 또는 통지하였음에도 이용자가 명시적으로
            거부 의사 표시를 하지 아니한 경우 이용자가 개정 약관에 동의한 것으로
            봅니다.
          </Typography>
          <Typography variant="body2" paragraph>
            6. 회사는 특정 이용자와 개별적으로 이 약관에 규정된 내용과 다른
            내용의 계약 (이하 “개별계약”)을 체결할 수 있습니다. 이 경우, 회사는
            개별계약을 체결한 이용자에게 계약내용을 서면(전자문서 포함)
            교부하거나 화면에서 확인할 수 있도록 합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            7. 이용자가 개정약관의 적용에 동의하지 않는 경우 회사는 개정 약관의
            내용을 적용할 수 없으며, 이 경우 이용자는 이용계약을 해지할 수
            있습니다. 다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는
            경우에는 회사가 이용계약을 해지할 수 있습니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 4 조 (서비스의 제공)
          </Typography>
          <Typography variant="body2" paragraph>
            회사가 제공하는 서비스의 내용 및 범위는 다음과 같습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            1. 상품의 중개 서비스
            <br />
            회원 개인 상호간에 상품에 대한 거래가 이루어질 수 있도록 회사가
            온라인으로 제공하는 상품에 대한 중개 서비스 및 관련 부가서비스
            일체를 말합니다. “회원”의 “상품”에 대한 거래는 입찰에 의한 거래 체결
            또는 판매자 및 구매자가 설정한 가격에 즉시 거래 체결되는 방식을 모두
            제공할 수 있습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 정보 서비스
            <br />
            회사가 각 회원에 대한 판매정보, 구매정보, 거래실적, 신용도, 회원정보
            등 회원의 거래 기록을 모아 회원 상호 간의 상품의 거래 및
            중개서비스를 신속하고 편리하게 이용하도록 하기 위하여 제공하는
            서비스를 말합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            3. E-Commerce Platform 개발 및 운영 서비스
            <br />
            판매 관련 지원 서비스, 구매 관련 지원 서비스, 상품 또는 용역에 대한
            정보 게시 및 검색 서비스, 재화 또는 용역에 대한 정보 제공 및 구매
            계약 체결/이행, 전자상거래 관련 서비스, 기타 회사가 정하는 업무 등의
            서비스를 말합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            4. 그레이딩 서비스
            <br />
            회사가 회원이 서비스를 요청하여 회사에 보낸 카드에 대해 회사의
            기준에 맞추어 판단을 하여 점수를 부여한 후, 정보값이 기재된 라벨을
            출력하여 카드와 함께 케이스에 밀봉하여 회원에게 배송하는 서비스를
            말합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            5. 상품의 보관 서비스
            <br />
            회원의 상품을 거래, 그레이딩 등의 목적으로 회사에서 보관하는
            서비스를 말합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            6. 기타 정보 서비스
            <br />
            상품 서비스 이외에 회사가 제공하는 서비스를 통하여 회원에게
            온라인으로 제공하는 정보서비스, 커뮤니티 등의 인터넷 서비스를
            말합니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 5 조 (서비스의 변경 및 중단)
          </Typography>
          <Typography variant="body2">
            1. 회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라
            제공하고 있는 전부 또는 일부 서비스를 제한, 변경하거나 중지할 수
            있습니다.
          </Typography>
          <Typography variant="body2">
            2. 회사는 제1항에 의한 서비스 중단의 경우에 인터넷 등에 사전
            공지하거나 제8조(회원에 대한 통지)에 정한 방법으로 회원에게
            통지합니다.
          </Typography>
          <Typography variant="body2">
            3. 서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는
            변경사유, 변경될 서비스의 내용 및 제공일자 등은 그 변경 전에 해당
            서비스 초기화면에 게시합니다.
          </Typography>
          <Typography variant="body2">
            4. 회사는 무료로 제공되는 서비스의 일부 또는 전부를 회사의 정책 및
            운영의 필요상 수정, 중단, 변경할 수 있으며, 이에 대하여 관련법에
            특별한 규정이 없는 한 회원에게 별도의 보상을 하지 않습니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 6 조 (회원가입)
          </Typography>
          <Typography variant="body2" paragraph>
            1. 회원가입을 원할 경우 이용자는 사이트에서 정한 가입 양식에 따라
            회원정보를 기입한 후 이 약관과 개인정보 수집 및 이용에 대한 안내에
            대해 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음
            각호에 해당하는 경우 회원 가입 신청을 거부할 수 있습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            ① 가입신청자가 이 약관 제7조 2항에 의하여 이전에 회원 자격을 상실한
            적이 있는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ② 등록 내용에 허위, 기재누락, 오기가 있는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ③ 기타 회원으로 등록하는 것이 사이트의 기술상 현저히 지장이 있다고
            판단되는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ④ 가입신청자가 회원 가입일 당시에 만 14세 미만인 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ⑤ 가입신청시 타인의 정보를 도용하여 허위 가입하거나 본인의 실명으로
            가입하지 않은 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ⑥ 이미 회원가입을 한 자 또는 회원가입을 한 이력이 있는 자가 중복하여
            가입신청을 하는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ⑦ 회원의 거주지에서 효력이 있는 대한민국 외의 법률에 따라 서비스
            이용행위가 해당 법률의 위반을 구성하거나 구성할 현저한 위험이 있는
            경우
          </Typography>
          <Typography variant="body2" paragraph>
            ⑧ 사회의 안녕, 질서 또는 미풍양속을 저해할 목적으로 가입신청한 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ⑨ 기타 본 약관에 위배되거나 위법 또는 부당한 이용신청임이 확인된
            경우
          </Typography>
          <Typography variant="body2" paragraph>
            3. 회원가입계약의 성립시기는 회사의 승낙이 회원에게 도달한 시점으로
            합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            4. 회원은 회원가입 시 등록 사항에 변경이 있는 경우, 상당한 기간
            이내에 회사에 대하여 회원정보 수정 등의 방법으로 그 변경사항을
            알려야 합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            5. 회사는 회원에 대해 회사정책에 따라 등급별로 구분하여 이용시간,
            이용횟수, 서비스 메뉴 등을 세분하여 이용에 차등을 둘 수 있습니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 7 조 (회원 탈퇴 및 자격 상실 등)
          </Typography>
          <Typography variant="body2" paragraph>
            1. 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원
            탈퇴를 처리합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 회원이 다음 각호의 사유에 해당하는 경우, 회사는 회원 자격을 제한
            및 정지시킬 수 있습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            ① 가입 신청 시에 허위 내용을 등록한 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ② 서비스를 통하여 구입한 재화 등의 대금, 기타 사이트 이용과 관련하여
            회원이 회사 또는 다른 회원에 부담하는 채무를 기일에 지급하지 않는
            경우
          </Typography>
          <Typography variant="body2" paragraph>
            ③ 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등
            전자상거래 질서를 위협하는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ④ 서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는
            행위를 하는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ⑤ 기타 다음과 같은 행위 등으로 서비스의 건전한 운영을 해하거나
            업무를 방해하는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            - 회사와 관련하여 진위가 불분명한 사실 또는 허위의 사실을 적시하거나
            유포하여 회사의 명예를 훼손하거나 회사의 신용을 훼손하는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            - 서비스 이용 과정에서 직원에게 모욕, 협박 또는 음란한 언행 등으로
            회사의 운영을 방해하는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            - 서비스를 통해 재판매 목적으로 재화 등을 중복 구매하는 등 서비스의
            거래 질서를 방해하는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ⑥ 서비스를 장기간(12개월) 동안 이용하지 않은 경우
          </Typography>
          <Typography variant="body2" paragraph>
            3. 회사가 회원 자격을 제한·정지시킨 후, 동일한 행위가 2회 이상
            반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 회사는
            회원자격을 상실시킬 수 있습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            4. 회사가 회원 자격을 상실시키는 경우에는 회원 등록을 말소합니다. 이
            경우 회원에게 이를 통지하고, 회원 등록 말소 전에 최소한 5일 이상의
            기간을 정하여 소명할 기회를 부여합니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 8 조 (회원에 대한 통지)
          </Typography>
          <Typography variant="body2" paragraph>
            1. 회사는 회원에 대한 통지를 하는 경우, 회원이 회원가입 시 기재한
            전자우편 주소로 할 수 있습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 회사는 이용자에 대한 통지의 경우 사이트 게시판에 게시함으로써
            개별 통지에 갈음할 수 있습니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 9 조 (청약철회 등)
          </Typography>
          <Typography variant="body2" paragraph>
            1. 회사와 재화 등의 구매에 관한 계약을 체결한 이용자는 「전자상거래
            등에서의 소비자보호에 관한 법률」 제13조 제2항에 따른 계약 내용에
            관한 서면을 받은 날(그 서면을 받은 때보다 재화 등의 공급이 늦게
            이루어진 경우에는 재화 등을 공급받거나 재화 등의 공급이 시작된 날을
            말함)부터 7일 이내에는 청약의 철회를 할 수 있습니다. 다만,
            청약철회에 관하여 「전자상거래 등에서의 소비자보호에 관한 법률」에
            달리 정함이 있는 경우에는 동 법 규정에 따릅니다.
          </Typography>
          <Typography variant="body2" paragraph>
            1. 회사와 재화 등의 구매에 관한 계약을 체결한 이용자는 「전자상거래
            등에서의 소비자보호에 관한 법률」 제13조 제2항에 따른 계약 내용에
            관한 서면을 받은 날(그 서면을 받은 때보다 재화 등의 공급이 늦게
            이루어진 경우에는 재화 등을 공급받거나 재화 등의 공급이 시작된 날을
            말함)부터 7일 이내에는 청약의 철회를 할 수 있습니다. 다만,
            청약철회에 관하여 「전자상거래 등에서의 소비자보호에 관한 법률」에
            달리 정함이 있는 경우에는 동 법 규정에 따릅니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 이용자는 재화 등을 배송받은 경우 다음 각호의 1에 해당하는
            경우에는 반품 및 교환을 할 수 없습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            ① 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우(다만,
            재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는 청약철회
            가능함)
          </Typography>
          <Typography variant="body2" paragraph>
            ② 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히
            감소한 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ③ 시간의 경과에 의하여 재판매가 곤란할 정도로 재화 등의 가치가
            현저히 감소한 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ④ 같은 성능을 지닌 재화 등으로 복제가 가능한 경우 그 원본인 재화
            등의 포장을 훼손한 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ⑤ 용역 또는 「문화산업진흥 기본법」 제2조 제5호의 디지털콘텐츠의
            제공이 개시된 경우. (다만, 가분적 용역 또는 가분적 디지털콘텐츠로
            구성된 계약의 경우에는 제공이 개시되지 아니한 부분에 대하여는
            그러하지 아니함)
          </Typography>
          <Typography variant="body2" paragraph>
            ⑥ 소비자의 주문에 따라 개별적으로 생산되는 재화 등 또는 이와 유사한
            재화 등에 해당하는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            3. 제2항 제2호 내지 제6호의 경우에 “사이트”가 사전에 청약철회 등이
            제한되는 사실을 소비자가 쉽게 알 수 있는 곳에 명기하거나 시용 상품을
            제공하는 등의 조치를 하지 않았다면 이용자의 청약철회 등이 제한되지
            않습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            4. 이용자는 제1항 및 제2항의 규정에 불구하고 재화 등의 내용이
            표시·광고 내용과 다르거나 계약 내용과 다르게 이행된 때에는 당해 재화
            등을 공급받은 날부터 3월 이내, 그 사실을 안 날 또는 알 수 있었던
            날부터 30일 이내에 청약철회 등을 할 수 있습니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 10 조 (청약철회 등의 효과)
          </Typography>
          <Typography variant="body2" paragraph>
            1. 회사는 이용자로부터 재화 등을 반환받은 경우 3영업일 이내에 이미
            지급받은 재화 등의 대금을 환급합니다. 이 경우 회사가 이용자에게 재화
            등의 환급을 지연한 때에는 그 지연기간에 대하여 「전자상거래 등에서의
            소비자보호에 관한 법률 시행령」 제21조의2에서 정하는 지연이자율을
            곱하여 산정한 지연이자를 지급합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 회사는 위 대금을 환급함에 있어서 이용자가 신용카드 또는 전자화폐
            등의 결제수단으로 재화 등의 대금을 지급한 때에는 지체 없이 당해
            결제수단을 제공한 사업자로 하여금 재화 등의 대금의 청구를 정지 또는
            취소하도록 요청합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            3. 청약철회 등의 경우 공급받은 재화 등의 반환에 필요한 비용은
            이용자가 부담합니다. 회사는 이용자에게 청약철회 등을 이유로 위약금
            또는 손해배상을 청구하지 않습니다. 다만 재화 등의 내용이 표시·광고
            내용과 다르거나 계약내용과 다르게 이행되어 청약철회 등을 하는 경우
            재화 등의 반환에 필요한 비용은 회사가 부담합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            4. 이용자가 재화 등을 제공받을 때 발송비를 부담한 경우에 회사는
            청약철회 시 그 비용을 누가 부담하는지를 이용자가 알기 쉽도록
            명확하게 표시합니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 11 조 (개인정보보호)
          </Typography>
          <Typography variant="body2" paragraph>
            회사가 이용자의 개인정보를 처리함에 있어서는, 회사가 별도로 관련
            법령이 정하는 바에 따라 작성한 “개인정보 처리방침”을 따릅니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 12 조 (회원의 ID 및 비밀번호에 대한 의무)
          </Typography>
          <Typography variant="body2" paragraph>
            1. ID와 비밀번호에 관한 관리 책임은 회원에게 있습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안
            됩니다.
          </Typography>
          <Typography variant="body2" paragraph>
            3. 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고
            있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내가 있는
            경우에는 그에 따라야 합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            4. 회원이 제3항의 통지를 하지 않거나 통지한 이후 회사의 안내에
            따르지 않아 발생하는 불이익에 대하여 회사는 책임지지 않습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            5. 회사는 회원이 등록한 계정과 비밀번호 등이 회사에 등록된 것과
            일치할 경우에는 별도의 확인절차 없이 이용자를 회원으로 간주합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            6. 회원은 회원가입시 입력한 내용에 변동이 있을 때에, 직접 서비스
            내에서 변동된 정보를 수정하거나 이메일, 고객센터를 통하여 변동된
            정보의 갱신을 요청하여야 하며, 최신의 정보를 유지하여야 합니다. 정보
            미변경으로 인하여 발생하는 불이익에 대하여 회사는 책임지지 않습니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 13 조 (이용자의 의무)
          </Typography>
          <Typography variant="body2" paragraph>
            이용자는 다음 행위를 하여서는 안 됩니다.
          </Typography>
          <Typography variant="body2" paragraph>
            1. 이용 계약(회원 가입)의 신청 또는 변경 시 허위 내용의 등록
          </Typography>
          <Typography variant="body2" paragraph>
            2. 타인의 정보 도용
          </Typography>
          <Typography variant="body2" paragraph>
            3. 회사가 게시한 정보를 변경하거나 제3자에게 제공
          </Typography>
          <Typography variant="body2" paragraph>
            4. 사이트가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는
            게시
          </Typography>
          <Typography variant="body2" paragraph>
            5. 회사 또는 제3자의 저작권 등 지적재산권에 대한 침해
          </Typography>
          <Typography variant="body2" paragraph>
            6. 회사 또는 제3자의 명예를 손상시키거나 업무를 방해하는 행위
          </Typography>
          <Typography variant="body2" paragraph>
            7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는
            정보를 사이트에 공개 또는 게시하는 행위
          </Typography>
          <Typography variant="body2" paragraph>
            8. 기타 본 약관, 개별계약 또는 법령에 위반되는 행위
          </Typography>
        </Box>

        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 14 조 (연결 웹사이트와 피연결 웹사이트 간의 관계)
          </Typography>
          <Typography variant="body2" paragraph>
            상위 웹사이트와 하위 웹사이트가 하이퍼 링크(예: 하이퍼 링크의
            대상에는 문자, 그림 및 동화상 등이 포함됨) 방식 등으로 연결된 경우,
            전자를 연결 웹사이트라고 하고 후자를 피연결 웹사이트라고 합니다.
            회사의 서비스 화면에서 링크, 배너 등을 통하여 연결된 회사(이하
            “피연결회사”)와 이용자간에 이루어진 거래에 회사는 개입하지 않으며,
            해당 거래에 대하여 책임을 지지 않습니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 15 조 (저작권의 귀속 및 이용제한)
          </Typography>
          <Typography variant="body2" paragraph>
            1. 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에
            귀속합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 이용자는 회사를 이용함으로써 얻은 정보 중 회사에게 지적재산권이
            귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송
            기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게
            하여서는 안 됩니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 16 조 (손해배상)
          </Typography>
          <Typography variant="body2" paragraph>
            1. 회사는 이용자가 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성
            등에 대해서는 보증을 하지 않으며 고의 또는 과실이 없는 한 이로 인해
            발생한 손해에 대하여 책임을 지지 않습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 회사의 책임 있는 사유로 인하여 이용자에게 손해가 발생한 경우
            회사의 손해배상 범위는 「민법」에서 정하고 있는 통상손해를 포함하고,
            특별한 사정으로 인한 손해는 회사가 그 사정을 알았거나 알 수 있었을
            때에 한하여 배상책임이 있습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            3. 제2항에도 불구하고 다음 각호의 어느 하나에 해당하는 경우에는
            이용자가 그 책임의 전부 또는 일부를 부담할 수 있습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            ① 이용자가 손해 발생의 원인 또는 손해 발생 사실을 알았음에도
            불구하고 회사에 통지하지 않은 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ② 이용자가 고의 또는 과실로 제3자에게 계정 정보를 유출하거나 계정을
            사용하게 한 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ③ 그 외에 손해 발생에 있어서 이용자의 고의나 과실이 있는 경우
          </Typography>
          <Typography variant="body2" paragraph>
            4. 회사는 회사의 책임 없는 사유로 인하여 이용자에게 발생한 손해에
            대하여는 배상책임이 없습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            5. 이용자가 본 약관의 의무를 위반하여 회사에게 손해가 발생한 경우,
            이용자는 그로 인하여 회사에 발생한 손해를 전부 배상하여야 합니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 17 조 (면책)
          </Typography>
          <Typography variant="body2" paragraph>
            1. “사이트”를 통하여 이루어지는 이용자 간 거래와 관련하여 발생하는
            상품의 배송, 청약철회, 반품 등 거래의 진행은 거래 당사자인 판매자와
            구매자 간에 수행되며, 회사는 거래의 진행에 관여하지 않습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 회사는 다음 각호에 해당하는 경우 회사의 고의 또는 과실이 없는 한
            이용자에게 손해배상책임을 지지 않습니다.
          </Typography>
          <Typography variant="body2" paragraph>
            ① 화재, 지진, 홍수, 낙뢰, 전쟁, 폭동, 반란, 국가비상사태, 천재지변
            기타 불가항력적인 사유로 손해가 발생한 경우
          </Typography>
          <Typography variant="body2" paragraph>
            ① 회사에 책임 없는 사유로 디도스(DDOS)공격, IDC장애, 전기통신서비스
            장애, 시스템 오작동 및 불능 사고로 손해가 발생한 경우
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 18 조 (분쟁해결)
          </Typography>
          <Typography variant="body2" paragraph>
            1. 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그
            피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 회사는 이용자로부터 제출되는 불만사항을 처리합니다. 다만, 신속한
            처리가 곤란한 경우에는 이용자에게 그 사유와 처리 예상 일정을
            통보합니다.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            제 19 조 (재판권 및 준거법)
          </Typography>
          <Typography variant="body2" paragraph>
            1. 이 약관과 이용계약 및 이용자 상호간의 분쟁에 대해 회사를 당사자로
            하는 소송이 제기될 경우에는 민사소송법상의 관할법원에 제기합니다.
          </Typography>
          <Typography variant="body2" paragraph>
            2. 이 약관과 회사와 이용자 간의 이용계약에는 대한민국 법령을
            적용합니다.
          </Typography>
        </Box>

        <Box py={3}>
          <Typography variant="body1" paragraph fontWeight={700}>
            본 약관은 2023년 02월 23일부터 시행합니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Agreement;
