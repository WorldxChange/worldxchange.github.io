"use client";

import { makePageStream } from "@/app/constants";

import FileList from "@/components/FileList";
import CenterHeader from "@/components/CenterHeader";

export default makePageStream([
  {
    component: CenterHeader,
    data: {
      header: "Resources",
      text: "Research papers, white papers, and other resources related to the project.",
    },
  },
  {
    component: FileList,
    data: {
      files: [
        {
          path: "files/video",
          title: "WxC Informational Video",
          description:
            "A short video introducing the WxC project and its goals, focusing on the Bali pilot project and its potential for global impact. The video highlights the project's innovative approach to addressing climate change and its implications for sustainable agriculture.",
          type: "mp4",
        },
        {
          path: "/files/BaliCC",
          title: "Carbon Emissions from Balinese Rice Paddies",
          description:
            "Our measurements of greenhouse gas emissions from Alternate Wetting and Drying versus flooded rice paddies in the Balinese subaks use a new methodology made possible by recent advances in technology. Prior studies of such emissions relied on a point sample using a syringe draw from a closed chamber placed on the field. This sample was then sent to a laboratory to be analyzed using a gas chromatograph. Published measurements of emissions from flooded rice fields using such sampling vary widely, often by over an order of magnitude. Recently, semi-portable gas spectrometers have become available that allow a field's emissions to be directly measured over an extended period of observation. Such measurements reveal the presence of critical discontinuities in the observed emissions that, if not accounted for, can have a large impact on the estimated emissions. For example, if a previously accumulated bubble of methane that is trapped in the paddy mud is released when the chamber is put in place, a single sample will not distinguish that event from the ongoing bioactivity of the rice plant.",
        },
        {
          path: "/files/BaliRF",
          title: "Rice Farming on Bali",
          description:
            "The Balinese have farmed rice in flooded paddies for over a millennium. Prior to the Green Revolution in the 1970s, slow-maturing native varieties of rice were grown in the nutrient-rich volcanic soils. Rainfall leaches potassium and phosphate from the volcanic soil and flows to the fields via the irrigation system. The flooded fields and traditional farming methods allow naturally occurring cyanobacteria to fix the needed nitrogen used by the plants. The Green Revolution introduced new, rapidly maturing, high-yielding rice varieties that required commercial fertilizers in lieu of microbial nitrogen fixation.",
        },
        {
          path: "/files/LansingEtAl2023",
          title:
            "Adaptive irrigation management by Balinese farmers reduces greenhouse gas emissions and increases rice yields",
          description:
            "The potential for changes in water management regimes to reduce greenhouse gases (GHG) in rice paddies has recently become a major topic of research in Asia, with implications for top-down versus bottom-up management strategies. Flooded rice paddies are a major source of anthropogenic GHG emissions and are responsible for approximately 11% of global anthropogenic methane (CH4) emissions. However, rice is also the most important food crop for people in low- and lower-middle-income countries. While CH emissions can be reduced by lessening the time the plants are submerged, this can trigger increased emissions of nitrous oxide (NO), a more potent GHG. Mitigation options for CH4 and N20 are different, and minimizing one gas may increase the emission of the other. Accurate measurement of these gas emissions in rice paddies is difficult, and the results are controversial. We analysed these trade-offs using continuous high-precision measurements in a closed chamber in 2018-2020. Based on the results, we tested a bottom-up adaptive irrigation regime that improves nitrogen uptake by rice plants while reducing combined GHG emissions and nitrogen runoff from paddies to reefs in agricultural drainages. In 2023, we undertook a follow-up study in which farmers obtained higher rice yields with adaptive intermittent irrigation compared to uniformly flooded fields. These results use the polycentric, self-governing capacity of Balinese subaks for continuous adaptation. This article is part of the theme issue 'Climate change adaptation needs a science of culture.",
        },
        {
          path: "/files/Mongabay2023",
          title:
            "Bali rice experiment cuts greenhouse gas emissions and increases yields",
          description:
            "MONGABAY: Rice paddies are like mini power stations. Each stalk acts like a chimney and shoots greenhouse gas from the soil into the air. In particular, rice paddies are responsible for 11% of the world’s emissions of methane, one of the most dangerous greenhouse gases. More than 90 percent of the world’s rice is grown on some 200 million rice farms in Asia.",
        },
        {
          path: "/files/evosuicide",
          title:
            "Averting Evolutionary Suicide from the Tragedy of the Commons",
          description:
            "In a tragedy of the commons, individual competition over a resource can reduce the resource itself, and thus reduce the fitness of the whole group. An extreme example is evolutionary suicide, which is predicted to occur when the selfish interests of free-riders and cheaters overwhelm cooperative behaviors, and the social good on which they depend ceases to exist. Case studies cite many different and seemingly interacting factors for success. Here we propose an equation-based theoretical model to predict changes in this balance, which determine whether the tragedy of the commons is observed in a particular scenario. Using survey data from 20 Balinese subaks, we explore the explanatory power of two theoretical traditions that are currently used to analyze commons management institutions, revealing multiple regimes with correlated responses to environmental threats. To explore case studies from a comparative perspective requires both theory and methods that can account for differences between regimes and explore transitions between them.",
        },
        {
          path: "/files/MarionEtAl2005",
          title:
            "Coral sketetal nitrogen reveals isotopic traces of an agricultureal revolution",
          description:
            "This study introduces a new method of tracing the history of nutrient loading in coastal oceans via d15N analysis of organic nitrogen preserved in the skeleton of the massive Poritescoral. Four coral cores were collected in Bali, Indonesia, from reefs exposed to high levels of fertilizers in agricultural run-oﬀ, from lagoonal corals impacted by sewage, and from a reef located 30 km oﬀshore.",
        },
        {
          path: "/files/LansingEtAl2017",
          title: "Adaptive self-organization of Bali's ancient rice terraces",
          description:
            "Spatial patterning often occurs in ecosystems as a result of a self-organizing process caused by feedback between organisms and the physical environment. Here, we show that the spatial patterns observable in centuries-old Balinese rice terraces are also created by feedback between farmers' decisions and the ecology of the paddies, which triggers a transition from local to global-scale control of water shortages and rice pests. We propose an evolutionary game, based on local farmers' decisions that predicts specific power laws in spatial patterning that are also seen in a multispectral image analysis of Balinese rice terraces. The model shows how feedbacks between human decisions and ecosystem processes can evolve toward an optimal state in which total har- vests are maximized and the system approaches Pareto optimal- ity. It helps explain how multiscale cooperation from the commu- nity to the watershed scale could persist for centuries, and why the disruption of this self-organizing system by the Green Revolu- tion caused chaos in irrigation and devastating losses from pests. The model shows that adaptation in a coupled human-natural system can trigger self-organized criticality (SOC). In previous exogenously driven SOC models, adaptation plays no role, and no optimization occurs. In contrast, adaptive SOC is a self-organizing process where local adaptations drive the system toward local and global optima.",
        },
        {
          path: "/files/LansingMiller2005",
          title:
            "Cooperation, Games, and Ecological Feedback: Some Insights from Bali",
          description:
            "For centuries Balinese rice farmers have been engaged in cooperative agricultural practices (Christie 1992; Scarborough, Schoenfelder, and Lansing 1999, 2000). This remarkable achievement in sustainable agriculture is surprising given water supply conditions that would normally result in a rapid breakdown of cooperation and the absence of any centralized control mechanisms. An important cultural element of this system includes networks of water temples that help to coordinate farming practices (Geertz 1980, Lansing 1991). Here we develop and test a simple game-theoretic model that links im- portant features of the human and ecological systems and provides an explanation for the emergence of co- operative farming practices in a decentralized system with severe externalities and the coordinating role of the water temple system.",
        },
      ],
    },
  },
]);
