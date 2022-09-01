import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
export default {
    namespaced: true,
    state() {
        return {
            projects: [{
                    id: "1",
                    title: "ネ百安へりてけ昇詳キサ神計セヲ浜交示けげひ",
                    code: "P-22-0018",
                    estimited_budget: "35,000,000",
                    state: "ordered",
                    description: "三だ抗増8行神石ハマム正オエア判将仙幅月ヲ",
                    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",

                    Action: "action",
                },
                {
                    id: "2",
                    title: "ネ百安へりてけ昇詳キ浜交示けげひ",
                    code: "P-22-0019",
                    estimited_budget: "33,000,000",
                    state: "cancelled",
                    description: "三だ抗増8行事ハりさ雄枚オエア判将仙幅月ヲ",
                    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
                    Action: "action",
                },
                {
                    id: "3",
                    title: "安へりてけ昇詳キ浜交示昇詳キ浜交示けげひ",
                    code: "P-22-0020",
                    estimited_budget: "22,000,000",
                    state: "In Progress",
                    description: "三だ抗増8行事ぶだり神石将仙幅月ヲ",
                    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
                    Action: "action",
                },
                {
                    id: "4",
                    title: "安へりてけ昇詳キ浜交示昇詳キ浜交示けげひ",
                    code: "P-22-0020",
                    estimited_budget: "22,000,000",
                    state: "ordered",
                    description: "三だ抗増8行事ぶだり神石将仙幅月ヲ",
                    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
                    Action: "action",
                },
                {
                    id: "5",
                    title: "安へりてけ昇詳キ浜交示昇詳キ浜交示けげひ",
                    code: "P-22-0020",
                    estimited_budget: "22,000,000",
                    state: "cancelled",
                    description: "三だ抗増8行事ぶだり神石将仙幅月ヲ",
                    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
                    Action: "action",
                },
            ],
        }
    },
    mutations,
    actions,
    getters
}