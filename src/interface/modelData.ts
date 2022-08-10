import {
  IAWARDS,
  IBASEINFO,
  ICAMPUSEXPERIENCE,
  IEDUBACKGROUND,
  IHOBBIES,
  IINTERNSHIPEXPERIENCE,
  IJOBINTENTION,
  IPROJECTEXPERIENCE,
  IRESUMETITLE,
  ISELFEVALUATION,
  ISKILLSPECIALTIES,
  IWORKEXPERIENCE,
  IWORKSDISPLAY
} from './model';

// 模块数据结构定义
interface IMODELDATAJSON {
  [props: string]:
    | IRESUMETITLE
    | IBASEINFO
    | IJOBINTENTION
    | IEDUBACKGROUND
    | ISKILLSPECIALTIES
    | ICAMPUSEXPERIENCE
    | IINTERNSHIPEXPERIENCE
    | IWORKEXPERIENCE
    | IPROJECTEXPERIENCE
    | IAWARDS
    | IHOBBIES
    | ISELFEVALUATION
    | IWORKSDISPLAY;
}

export default IMODELDATAJSON;
