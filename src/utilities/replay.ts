import { CONSTANTS } from "thrpy-parser"

export function appendStartingStage(replay: any): object {
    const newStageInstance = {}

    let newIdx = -1
    for (const stageInstance of replay.stages)
        [stageInstance.stage, newIdx] = [newIdx, stageInstance.stage]

    if (replay.game == CONSTANTS.GAME.TH09.ID) {
        let p2 = undefined
        for (const stageInstance of replay.stages)
            [stageInstance.p2_shot, p2] = [p2, stageInstance.p2_shot]

        replay.stages.push({
            stage: newIdx,
            p2_shot: p2
        })
        return replay
    }

    Object.assign(newStageInstance, {
        stage: newIdx,
        score: replay.score
    })

    replay.stages.push(newStageInstance)
    return replay
}