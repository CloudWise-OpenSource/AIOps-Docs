# Some tasks for the dataset

## Task 1: metric anomaly detection

### task background

When the IT system fails, the operators must ensure that the deployed services and intermediate software have sufficient computing and network resources, and solve all the emergency situations that deteriorate the system performance. Quickly find the root cause of IT system failure or problem. At this time, many monitoring indicators will show an abnormal state. As a means to automatically find out whether the monitoring indicators of the system are in an abnormal state through the algorithm, if used properly, the system will be informed of the failure in time, providing valuable clues for further root cause analysis.

Therefore, anomaly detection for metric is very important in aiops. It can give an alarm in time to determine whether the system has a fault. It provides valuable information and time for subsequent root cause analysis.

### task description

For a given metric with abnormal behavior, we give labels for each point of time series (0 for normal, and 1 for anomaly). Participants need to accurately judge the normal data points and abnormal data points in the time series data through the algorithm. In our dataset, there are different kinds of data types, such as periodic data, stationary data, data with change points and so on. Participants need to accurately identify the outliers under the above different data types.

### data description
|     File name      | Relevant repository |
| ------------------ | ------------------- |
| **Companion Data** | metrc_detection     |
| **MicroSS**        | metric              |


### evaluation metrics

Time series anomaly detection here is a classification problem, and its evaluation metric is the same as that of traditional machine learning. We usually use the notion "accrancy", "precision", "recall" and "F1-score" to evaluate the result.

Here Accrancy is proportion of correctly predicted samples in the total samples;

Precision is correct proportion of positive samples predicted by the classifier;

Recall is proportion of correct positive samples predicted by the classifier to all positive samples;

F1-Score is a combination of Precision and Recall.

We let TP stand for True positive, TN for True negative, FP for False positive and FN for False negative,where:

$Accrancy = \frac{TP+TN}{TP+TN+FP+FN}$

$Precision = \frac{TP}{TP+FP}$

$Recall = \frac{TP}{TP+TN}$

$F1Score = \frac{2PR}{P+R}$

where P is Precison and R is Recall.


## Task 2: metric forecasting

### task background

Operational observations collected by the AIOps platform manifest explicitly the operational situation of either an IT system it deployed on or the underlying business development. Forecasting is essential for the IT operation system especially in the context of early information acquisition of the working status of hardware of IT facilities, such as CPU usage, disk memory which will significantly harm computational efficiency, network response speed and I&O stability when corruption occurs. Besides forecasting on the above mentioned hardware metrics, accurately forecasting the key metrics associated to business performance further provided the business insight on marketplace growth trend and expected revenue earned in the future realistically.

Forecasting based on the historical behavior of interested key metrics can be utilized to support resource optimization enabling maximization of equipment utilization and reduction of cost, to alarm the equipment fault in advance, to provide business perspective into important events and so forth.

Therefore, forecasting is critical in AIOps as it allows operation teams to be informed in advance of equipment operating status such as CPU usage, disk memory and network response time with respect to basic monitoring, and to be indicated of future inventory capacity and sales revenue in business monitoring.

### task description

Before collecting target metrics for forecasting, participants are required to estimate whether and to what extent, the metrics can be forecasted. In our dataset, there are different kinds of data types, such as periodic data, linear data, stationary data, data with change points and so on. The task of metric forecasting here is, for a given client interested metric from either hardware monitoring or business monitoring belong to aboved metioned dataset, the participants need to conduct time series prediction and to predict their future as accurately as possible, given the historical dataset and knowledge of any future events that might influence the forecasts.

### data description

|     File name      | Relevant repository |
| ------------------ | ------------------- |
| **MicroSS**        | metric              |
| **Companion Data** | metrc_forecast      |


### evaluation metrics

In metric forecasting, the performance of the selected algorithem can only be apropriately assessed once the data for the forecast period have become available. There are two evaluation methods are employed in evaluating the accuracy of forecasting results.

First we define the forecasting error as: $e_{T+h} = Y_{T+h} - \hat Y_{T+h}$



Then the two evaluation metrics applied are:

MAE = $\frac{1}{h}\Sigma_{i=1}^{h}|e_{T+i}|$

MSE = $\frac{1}{h}\Sigma_{i=1}^{h}e_{T+i}^{2}$

## Task 3: log semantics anomaly detection

### task background

Logs record the detailed runtime information of the software system, and theoretically contain a wealth of system information. Engineers can examine recorded logs to understand the status of software systems, detect system anomalies and locate the root causes. Therefore, logs play an important role in IT operation and maintenance. Log anomaly detection has also become an urgent problem. Particularly, log semantics contain a lot of information, such as whether the log is associated with the failures, and what type of exceptions are contained in the log. The use of log semantic information helps to detect system anomalies and locate the root cause of the system.

Traditionally, engineers simply perform keyword search of logs that may be associated with the failures, such as "failed", "kill" and so on. However such an approach is time consuming and error prone. Also, it's unable to get the exception type for engineers.

### task description

This task is divided into two phases: log classification and exception-type classification. In the log classification phase, we divide logs into normal logs and error logs based on log semantics. In the exception-type classification phase, we first define six common exceptions of software systems: file/directoty operation exception, network exception, database exception, hardware exception, operation system exception and other exceptions. And then, we detect the type of exception contained in the log. Finally, the output of this task is a tuple like (log-type, exception-type).

### data description

|     File name      | Relevant repository |
| ------------------ | ------------------- |
| **MicroSS**        | business \| run     |
| **Companion Data** | log                 |


### evaluation metrics

Log semantics anomaly detection here includes 2 phases: binary classification and multi classification. Its evaluation metric is the same as that of traditional machine learning.

In binary classification, we usually use the notion "accuracy", "precision", "recall" and "F1-score" to evaluate the result. In multi classification, we usually use the notion "macro-accuracy", "macro-precision", "macro-recall", "macro-f1" evaluate the result. where:

$Accrancy = \frac{TP+TN}{TP+TN+FP+FN}$

$Precision = \frac{TP}{TP+FP}$

$Recall = \frac{TP}{TP+TN}$

$F1Score = \frac{2PR}{P+R}$ where P is Precision and R is Recall.

$Macro-accuracy =  \frac{1}{n}\sum_{i=1}^nA_{i}$

$Macro-precision =  \frac{1}{n}\sum_{i=1}^nP_{i}$

$Macro-recall =  \frac{1}{n}\sum_{i=1}^nR_{i}$

$Macro-f1 =  \frac{1}{n}\sum_{i=1}^nF1_{i}$

Accrancy is proportion of correctly predicted samples in the total samples;

Precision/Macro-precision is correct proportion of positive samples predicted by the classifier;

Recall/Macro-recall is proportion of correct positive samples predicted by the classifier to all positive samples;

F1-Score/Macro-f1 is a combination of Precision and Recall.

$A_{i}$is the accuracy score of the ith classification;

$P_{i}$is the precision score of the ith classificaiton;

$R_{i}$is the recall score of the ith classification;

$F1_{i}$is the f1 score of the ith classification;

We let TP stand for True positive, TN for True negative, FP for False positive and FN for False negative.

## Task 4: log parsing

### task backgroud

Logs are imperative in the development and maintenance process of many software systems. They record detailed runtime information during system operation that allows developers and support engineers to monitor their systems and dissect anomalous behaviors and errors. The increasing scale and complexity of modern software systems, however, make the volume of logs explode, thus rendering the infeasibility of the traditional way of manual log inspection. Many recent studies, as well as industrial tools, resort to powerful text search and machine learning-based analytics solutions. Due to the unstructured nature of logs, a first crucial step is to parse log messages into structured data for subsequent analysis.

### task description

The log is semi-structured text data,it is a composition of constant strings and variable values. The constant part reveals the event template of a log message and remains the same for every event occurrence. The variable part carries dynamic runtime information (i.e., parameters) of interest, which may vary among different event occurrences.The goal of log parsing is to convert each log message into a specific event template (e.g., “Starting executor ID <*> on host <*>*”) associated with key parameters (e.g.，[“5”, “mesos-slave-07”]), where “<**>” denotes the position of each parameter.And it needs to get all logs corresponding to each log template.

### data description

|     File name      | Relevant repository |
| ------------------ | ------------------- |
| **MicroSS**        | business \| run     |
| **Companion Data** | log                 |

### evaluation metric

In log parsing, we mainly evaluate whether the log is accurately classified, so there are two ways to evaluate the accuracy of log pattern parsing. One is PA (Parse Accrancy) and the other is F measure.

$PA=\frac{1}{N}\sum_{j=1}^J\sum_{k=1}^K f(\omega_k,c_j)$ ,  where $f(\omega_k,c_j)= |c_j|$ if $\omega_k \cap c_j=c_j$ and $|\omega_k|=|c_j|$, otherwise $f(\omega_k,c_j)= 0$ .

$N$ is total number of samples，$\Omega =\{\omega_1,\omega_2,\cdots,\omega_K\}$ is the set of clusters and $\mathbb{C}=\{c_1,c_2,\cdots,c_J\}$ is the set of classes. $\omega_k$ represents the  $k_{th}$ cluster in the set $\Omega$ , $c_j$ represents the $j_{th}$ class in the set $\mathbb{C}$.

An alternative to this information-theoretic interpretation of clustering is to view it as a series of decisions, one for each of the $N(N-1)/2$ pairs of documents in the collection. We want to assign two documents to the same cluster if and only if they are similar. A true positive (TP) decision assigns two similar documents to the same cluster, a true negative (TN) decision assigns two dissimilar documents to different clusters. There are two types of errors we can commit. A false positive (FP) decision assigns two dissimilar documents to the same cluster. A false negative (FN) decision assigns two similar documents to different clusters.We can use the F measure to penalize false negatives more strongly than false positives by selecting a value $\beta >1$ , thus giving more weight to recall.

$Percision =\frac{TP}{TP+FP}$ , $Recall =\frac{TP}{TP+FN}$ , $F_{\beta}=\frac{(\beta^2+1)Percision\cdot Recall}{\beta^2Percision + Recall}$ .

## Task 5: named entity recognition（NER)

### task background

Identifying and classifying Named Entities, or Named Entity Recognition (NER), from unstructured texts, is a central problem in natural language processing and has several applications like classification, intent analysis, etc.

A log is a computer-generated string with a significant amount of contextual information related to action that triggered that log event. Variety of systems and devices generate a huge amount of log messages every day. This information can be both human readable and machine-readable. When a fault occurs, operation and maintenance personnel need to read a large number of original logs, and locate and solve the problem based on the information in the log. However, the volume and variation of these data types adds to the complexity how we understand and perceive these log messages. To solve this problem, we need to identify an approach to extract the information in the form of named entities, which is NER task in log analysis.

As a basic upstream task in NLP, NER can not only help operation and maintenance personnel save a lot of time, but can also be further used for other related tasks. In log parsing task, since named entities are always variables, NER could indicate constant parts and variables of a log, thus get the template of that log. Also, Identifying such named entities helps analyzing the intent of the incident ticket, routing it to the right mitigation teams for resolution, and potentially avoiding such incidents in the future.

Therefore, NER is an important task in AIOps. It extracts important information in logs, helping operation and maintenance personnel quickly identify the root cause by relating the information from multiple logs and metrics, then helps to fix the problem faster. So that operation and maintenance personnel can get rid of reading large number of raw logs. At the same time, NER is an upstream task in AIOps, and its results can be further used for other tasks not only in log analysis.

### task description

NER problem can be treated as a sequence labeling problem. In machine learning, sequence labeling is a type of pattern recognition task that involves the algorithmic assignment of a categorical label to each member of a sequence of observed values. In the context of logs, we usually define named entities as path, host, url, date, time etc.

Although NER is already a relatively mature task in the field of NLP, NER still faces many challenges in the field of log:

1. Entity uncertainty: Log entities are usually infinite and uncertain in length, such as path entities, which makes it very difficult to identify entities through dictionaries or similarity methods.

2. Generalization: Log entities from different sources usually have different characteristics. For example, the path in the windows system is different from the path in the Linux system. Beside, NER in logs has higher requirements for identifying entities that have not appeared before, because many entities are completely different in different environments, such as host entities.

3. High performance requirements: The system and equipment will continue to produce a large number of logs, usually GB-level log files need to be processed. How to optimize the performance of the model so that it can meet NER's computing time requirements is also a major challenge in NER practice.

### data description

|     File name      | Relevant repository |
| ------------------ | ------------------- |
| **Companion Data** | log                 |

There are currently six data sets available: apache, hadoop, hdfs, kafka, spark, openstack. The data set is labeled with nine entities, which are date, time, message level (LVL), path, function name (FUNC), class name (CLS), HOST, IP, URL.

A log in datasets is first segmented according to spaces and some special punctuation marks. Then they are labeled in so-called IOB2 format. Each token in a log is labeled with either ‘O’ (other), ‘B-XXXX’ (beginning token for entity of type ‘XXXX’), ‘I-XXXX’ (inside token for entity type ‘XXXX’).

### evaluation metrics

Since NER could be treated as a sequence tagging task, which is also a classification problem, evaluation metrics are precision, recall, accuracy and f1 score, just same as above.

## Task 6: metric root cause analysis (MeRCA)

### task background

IT operation aims to maintain the stability of the services running without misfunctions. Therefore the operation staff must guarantee the sufficiency of computation and network resources for services and middlewares deployed on, meanwhile resolving all urgent situations which exacerbate system performances. It is a critical command to operation staff to rapidly find the root cause of a fault or a problem to the IT system. Root cause analysis, as a process to automatically and algorithmatically discover the root causes to the symptoms of the system, will save much of the time and effort spent on fault localization by operation staff and simultaneously improves the accuracy, if properly used.

Therefore, root cause analysis is crucial in AIOps to generate remedy for misfunction of the system. After localizing the root cause of the system, the operation staff will be enabled to identify the problem and then fix it.

### task description

For the given metric with anomalous behavior, participants need to find out the root cause scores (RCSs) for all metrics to be the root cause of the given metric via analyzing the causality and relevance between metrics.

In MeRCA we aim to find out that, for the given metric monitored to be in anomalous behavior, which metrics lead to such symptom.

Here we select a login scenario from **MicroSS** for the root cause analysis task MeRCA. This scenario simulates the following procedures. Users login to an application via scanning the QR code created by the system. This is restricted to be finished within one minute from the generation of the QR code, otherwise the QR code will be discarded from database and the login will fail.

### data description

|  File name  |        Relevant repository         |
| ----------- | ---------------------------------- |
| **MicroSS** | metric \| trace \| business \| run |


### evaluation metrics

In MeRCA we use the score $TOP_{K} ^{Alg}$ , where $K$ is 1, 3 or 5, to evaluate the performance of algorithm $Alg$ . We denote $Inc$ as the set of incidents in MeRCA. For each incident $a \in Inc$ and algorithm $Alg$ , the output order for metric $m$ is $O_{a}^{Alg}(m)$ . We also denote $rc_{a}$ as the real root cause for incident $a \in Inc$ . Then we define the evaluation score $TOP_{K}^{Alg} = \frac{1}{|A|}\sum_{a \in A} \frac{1}{O_{a}^{Alg}(rc_{a})}$, where $K$ is 1, 3 or 5 .

