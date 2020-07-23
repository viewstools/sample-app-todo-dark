import * as fromCompare from 'Data/compare.js';
import { useData } from 'Data/ViewsData.js';
import { useFlow, useSetFlowTo } from 'Logic/ViewsFlow.js';
import { useEffect, useMemo } from 'react';

let set = [];
let DEPENDENCY = '';

export default function SetFlowToBasedOnData({
  data: path,
  viewPath,
  compare = null,
  dependency = DEPENDENCY,
  content = 'Content',
  no = 'No',
}) {
  if (process.env.NODE_ENV === 'development') {
    if (compare && !(compare in fromCompare)) {
      throw new Error(
        `"${compare}" function doesn't exist or is not exported in Data/compare.js`
      );
    }
  }

  let data = useData({ context: path.split('.')[0], path });
  let flow = useFlow();
  let setFlowTo = useSetFlowTo();

  let [rviewPath, viewPathNext] = useMemo(() => {
    let rviewPath = viewPath.replace('/SetFlowToBasedOnData', '');
    let isContent = compare ? fromCompare[compare](data.value) : !!data.value;
    return [rviewPath, `${rviewPath}/${isContent ? content : no}`];
  }, [`${viewPath}${JSON.stringify(data.value)}${dependency}`]); // eslint-disable-line
  // ignore setFlowTo and compare

  useEffect(() => {
    if (flow.has(viewPathNext)) {
      set = set.filter((item) => item !== viewPathNext && item !== rviewPath);
    } else {
      if (set.some((item) => rviewPath.startsWith(item))) return;

      set.push(rviewPath);
      set.push(viewPathNext);
      setFlowTo(viewPathNext);
    }
  }, [flow, rviewPath, viewPathNext]); // eslint-disable-line
  // ignore setFlowTo

  return null;
}
