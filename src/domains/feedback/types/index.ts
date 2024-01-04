import { PageInfo } from 'types';

export type TableDatas = FeedbackServerModel | FeedbackTableStatus;

export interface FeedbackTableStatus {
  num: string;
  subject: string;
  app: string;
  dateCreated: string;
  hasPin: boolean;
}

export interface FeedbackServerModel {
  history: Feedback[];
  pageInfo: PageInfo;
}

type Company = {
  id: string; // unique Random string
  name: string; // 10 ~ 50자
};

type Customer = {
  id: string; // unique Random string
  name: string; // 10 ~ 50자
};

type Agent = {
  id: string; // unique Random string
  name: string; // 10 ~ 50자
};

enum Category {
  FEATURE = 1,
  BUG,
  HOW_TO,
  OTHERS,
}

enum Sentiment {
  POSITIVE = 1,
  NEUTRAL,
  NEGATIVE,
}

enum Source {
  SLACK = 1,
  DISCORD,
  INTERCOM,
}

export interface Feedback {
  ticket: number; // 개별 피드백의 고유한 티켓 번호입니다(고정)
  company: Company; // 해당 피드백을 준 고객의 회사 정보입니다. (Select, 변경 가능)
  customer: Customer; // 해당 피드백을 준 고객 정보입니다. (Select, 변경 가능)
  title: string; // 10 ~ 200자
  category: Category; // 피드백이 분류된 카테고리입니다. (Select, 변경 가능)
  sentiment: Sentiment; // 피드백이 분류된 감정상태입니다.  (Select, 변경 가능)
  source: Source; // 피드백이 들어온 소스입니다. (Select, 변경 가능)
  created_at: string; // Date string // 피드백이 생성된 날짜입니다
  agent: Agent; // 피드백을 담당한 담장자 정보입니다. (Select, 변경 가능)
}

export interface FeedbackListType {
  status?: string[];
  date?: string[];
  page?: string[];
}
