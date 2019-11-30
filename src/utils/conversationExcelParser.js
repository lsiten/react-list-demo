import XLSX from 'js-xlsx';
import { message } from 'antd';
import Uuid from 'uuid';

const tidyUtils = {
  baseInfo: baseInfo => {
    const [data] = baseInfo;
    return {
      host_name: data.host_name,
      goal: data.goal,
      ice_breaking: data.ice_breaking,
      reward_diamond: data.reward_diamond,
      ending: {
        simple: data.ending_simple,
        rich: data.ending_rich
      },
      background_story: {
        title: data.background_story_title,
        topic: data.background_story_topic,
        content: data.background_story_content
      }
    };
  },
  plot: plot => plot.filter(item => Boolean(item.conversation_type))
    .map(item => ({ ...item, id: item.id || Uuid() })),
  matching: matching => {
    const ret = [];
    for (let i = 0; i < matching.length; i++) {
      const rowObject = matching[i];
      const question = [];
      const answer = [];
      if (rowObject) {
        // eslint-disable-next-line guard-for-in
        for (const k in rowObject) {
          // eslint-disable-next-line no-unused-expressions
          k.toLocaleLowerCase().includes('question_') && question.push(rowObject[k]);
          // eslint-disable-next-line no-unused-expressions
          k.toLocaleLowerCase().includes('answer_') && answer.push(rowObject[k]);
        }
      }
      if (question.length && answer.length) {
        ret.push([question, answer]);
      }
    }
    return ret;
  },
  hit: data => data.map(item => ({ ...item, id: item.id || Uuid() })),
  npc: data => data.map(item => ({ ...item, id: item.id || Uuid() })),
  scene: data => data.map(item => ({ ...item, id: item.id || Uuid() })),
  conversation: data => data.map(item => ({ ...item, id: item.id || Uuid() })),
  emotion: data => data.map(item => ({ ...item, id: item.id || Uuid() }))
};
export default function conversationExcelParser(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = event => {
      try {
        const { result } = event.target;
        const workbook = XLSX.read(result, { type: 'binary' });
        const sheetNames = [
          'baseInfo',
          'plot',
          'matching',
          'hit',
          'npc',
          'scene',
          'conversation',
          'emotion'
        ];
        const excelData = sheetNames.map(
          (item, index) => XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[index]])
        );
        const resolvedData = excelData.map((item, index) => (tidyUtils[sheetNames[index]])(item));
        console.log(resolvedData);
        resolve(resolvedData);
      } catch (e) {
        message.error('文件类型不正确');
        reject();
      }
    };
    fileReader.readAsBinaryString(file);
  });
}
