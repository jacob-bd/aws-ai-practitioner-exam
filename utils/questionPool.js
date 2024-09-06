// utils/questionPool.js

const questionPool = [
  {
    text: "A company wants to gain insights from diverse data sources and formats to improve business operations. The data sources include audio from call centers, text feedback from customers, product images, and scanned documents. The company wants to identify custom labels to categorize the product images based on historic product images. Which combination of steps will meet this requirement?",
    type: "multi",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "Create a training model project in Amazon Textract.",
        correct: false,
        explanation: "Amazon Textract is a service that you can use to extract text and data from scanned documents, PDFs, and images. You cannot use Amazon Textract to identify new product categories based on historic images."
      },
      {
        text: "Create a training model project in Amazon Rekognition.",
        correct: true,
        explanation: "Amazon Rekognition is a deep learning image and video analysis service. You can use Amazon Rekognition to analyze and extract insights from visual content. One of the use cases for Amazon Rekognition is the classification of products into categories by using custom labels and training a model."
      },
      {
        text: "Provide the unlabeled historic images to the model training.",
        correct: false,
        explanation: "To train the model, you must provide labeled images to the dataset. Therefore, this solution does not meet the requirements."
      },
      {
        text: "Label the historic images by category and provide the labeled images to the model training.",
        correct: true,
        explanation: "To train the model, you must provide labeled images to the dataset. Additionally, you should label the images by category for the model to use for training."
      },
      {
        text: "Create a custom model in Amazon Comprehend.",
        correct: false,
        explanation: "Amazon Comprehend is a service that uses natural language processing (NLP) to extract insights from documents. You can build custom models in Amazon Comprehend. However, you cannot use Amazon Comprehend to identify new product categories based on images."
      }
    ]
  },
  {
    text: "A travel company wants to use a pre-trained generative AI model to generate background images for marketing materials. The company does not have ML expertise. Additionally, the company does not want to customize and host the ML model. Which AWS service will meet these requirements?",
    type: "single",
    domain: "Applications of Foundation Models",
    options: [
      {
        text: "Amazon Bedrock",
        correct: true,
        explanation: "Amazon Bedrock is a fully managed service that provides a unified API to access popular foundation models (FMs). Amazon Bedrock supports image generation models from providers such as Stability AI or AWS. You can use Amazon Bedrock to consume FMs through a unified API without the need to train, host, or manage ML models."
      },
      {
        text: "Amazon SageMaker JumpStart",
        correct: false,
        explanation: "SageMaker JumpStart is a feature of SageMaker that includes pre-trained foundation models (FMs) for image generation. You can host the models in SageMaker with no additional training. However, this solution requires you to configure and monitor the production endpoint that hosts the ML model."
      },
      {
        text: "Amazon Rekognition",
        correct: false,
        explanation: "Amazon Rekognition is a fully managed AI service that uses deep learning to analyze images and videos. Amazon Rekognition can perform object-detection tasks. However, Amazon Rekognition does not modify or generate new images."
      },
      {
        text: "Amazon Personalize",
        correct: false,
        explanation: "Amazon Personalize is a fully managed ML service that targets recommendations, such as search results or user segments based on interaction data. You can use Amazon Personalize to target a marketing campaign. For example, Amazon Personalize can recommend segments of users who are most likely to respond to a promotion. However, Amazon Personalize is not an image generation service."
      }
    ]
  },
  // Domain 1: Fundamentals of AI and ML
  {
    text: "What is the main difference between artificial intelligence (AI) and machine learning (ML)?",
    type: "single",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "AI is a subset of ML",
        correct: false,
        explanation: "This is incorrect. Machine learning is actually a subset of artificial intelligence, not the other way around."
      },
      {
        text: "ML is a subset of AI that focuses on learning from data",
        correct: true,
        explanation: "Machine learning is indeed a branch of AI that focuses on using data and algorithms to imitate the way humans learn, gradually improving its accuracy."
      },
      {
        text: "AI and ML are completely separate fields",
        correct: false,
        explanation: "This is incorrect. While they are distinct concepts, ML is a subset of AI and they are closely related."
      },
      {
        text: "ML only deals with structured data while AI can handle any type of data",
        correct: false,
        explanation: "This is not accurate. Both AI and ML can handle various types of data, including structured and unstructured data."
      }
    ]
  },
  {
    text: "Which of the following is NOT a type of machine learning?",
    type: "single",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "Supervised learning",
        correct: false,
        explanation: "Supervised learning is a valid type of machine learning where the model is trained on labeled data."
      },
      {
        text: "Unsupervised learning",
        correct: false,
        explanation: "Unsupervised learning is a valid type of machine learning where the model finds patterns in unlabeled data."
      },
      {
        text: "Reinforcement learning",
        correct: false,
        explanation: "Reinforcement learning is a valid type of machine learning where an agent learns to make decisions by taking actions in an environment."
      },
      {
        text: "Quantum learning",
        correct: true,
        explanation: "Quantum learning is not a recognized type of machine learning. The main types are supervised, unsupervised, and reinforcement learning."
      }
    ]
  },
  {
    text: "What is the primary goal of deep learning?",
    type: "single",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "To create shallow neural networks",
        correct: false,
        explanation: "Deep learning actually focuses on creating deep neural networks with multiple layers, not shallow ones."
      },
      {
        text: "To mimic human brain structure and function",
        correct: true,
        explanation: "Deep learning uses layers of neural networks to process information in a way inspired by the human brain, aiming to mimic its structure and function."
      },
      {
        text: "To only work with structured data",
        correct: false,
        explanation: "Deep learning can work with both structured and unstructured data, not just structured data."
      },
      {
        text: "To eliminate the need for large datasets",
        correct: false,
        explanation: "Deep learning typically requires large datasets to be effective, rather than eliminating the need for them."
      }
    ]
  },
  {
    text: "What is the main difference between batch and real-time inferencing?",
    type: "single",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "Batch inferencing is always faster than real-time inferencing",
        correct: false,
        explanation: "This is not always true. The speed depends on various factors and the specific use case."
      },
      {
        text: "Real-time inferencing processes data as it arrives, while batch processes accumulated data",
        correct: true,
        explanation: "This is correct. Real-time inferencing provides immediate results as data comes in, while batch inferencing processes larger sets of accumulated data at scheduled intervals."
      },
      {
        text: "Batch inferencing is only used for small datasets",
        correct: false,
        explanation: "This is incorrect. Batch inferencing is often used for large datasets that don't require immediate processing."
      },
      {
        text: "Real-time inferencing can only be used with simple models",
        correct: false,
        explanation: "This is not true. Real-time inferencing can be used with both simple and complex models, depending on the requirements and available resources."
      }
    ]
  },
  {
    text: "Which of the following is an example of unsupervised learning?",
    type: "single",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "Predicting house prices based on features like size and location",
        correct: false,
        explanation: "This is an example of supervised learning, as it involves predicting a specific output (price) based on labeled input data."
      },
      {
        text: "Classifying emails as spam or not spam",
        correct: false,
        explanation: "This is also an example of supervised learning, where the model is trained on labeled data (emails marked as spam or not spam)."
      },
      {
        text: "Clustering customers into groups based on purchasing behavior",
        correct: true,
        explanation: "This is an example of unsupervised learning. The model finds patterns and groups in the data without pre-existing labels."
      },
      {
        text: "Teaching a robot to play chess through repeated games",
        correct: false,
        explanation: "This is an example of reinforcement learning, where the agent (robot) learns through interaction with its environment."
      }
    ]
  },
  {
    text: "What is the primary purpose of feature engineering in machine learning?",
    type: "single",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "To increase the number of features in a dataset",
        correct: false,
        explanation: "The goal of feature engineering is not simply to increase the number of features, but to create more meaningful ones."
      },
      {
        text: "To remove all irrelevant features from a dataset",
        correct: false,
        explanation: "While feature engineering may involve removing irrelevant features, this is not its primary purpose."
      },
      {
        text: "To create new, more informative features from existing data",
        correct: true,
        explanation: "Feature engineering aims to create new features or transform existing ones to improve model performance by providing more meaningful input data."
      },
      {
        text: "To automate the entire machine learning process",
        correct: false,
        explanation: "Feature engineering is just one part of the machine learning process and does not automate the entire workflow."
      }
    ]
  },
  {
    text: "What is the main difference between classification and regression in machine learning?",
    type: "single",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "Classification is supervised learning, while regression is unsupervised",
        correct: false,
        explanation: "Both classification and regression are types of supervised learning."
      },
      {
        text: "Classification predicts categorical outcomes, while regression predicts continuous values",
        correct: true,
        explanation: "This is correct. Classification models predict discrete categories, while regression models predict continuous numerical values."
      },
      {
        text: "Regression can only be used with linear models",
        correct: false,
        explanation: "This is incorrect. Regression can be performed with both linear and non-linear models."
      },
      {
        text: "Classification requires more data than regression",
        correct: false,
        explanation: "The amount of data required depends on the specific problem and model, not whether it's classification or regression."
      }
    ]
  },
  {
    text: "What is the purpose of cross-validation in machine learning?",
    type: "single",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "To increase the training dataset size",
        correct: false,
        explanation: "Cross-validation doesn't increase the dataset size; it's a method for assessing model performance."
      },
      {
        text: "To eliminate the need for a test set",
        correct: false,
        explanation: "Cross-validation doesn't replace the need for a test set, which is still important for final model evaluation."
      },
      {
        text: "To assess how well a model generalizes to unseen data",
        correct: true,
        explanation: "Cross-validation helps evaluate how well a model will perform on new, unseen data by using different subsets of the training data for validation."
      },
      {
        text: "To automatically select the best features",
        correct: false,
        explanation: "While cross-validation can be used in feature selection processes, this is not its primary purpose."
      }
    ]
  },
  {
    text: "What is the main advantage of using Amazon SageMaker for machine learning projects?",
    type: "single",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "It eliminates the need for any coding",
        correct: false,
        explanation: "While SageMaker provides many tools to simplify ML workflows, it doesn't completely eliminate the need for coding in all cases."
      },
      {
        text: "It provides a fully managed platform for building, training, and deploying ML models",
        correct: true,
        explanation: "SageMaker offers a comprehensive, managed platform that simplifies the entire machine learning workflow, from data preparation to model deployment."
      },
      {
        text: "It only works with pre-built models",
        correct: false,
        explanation: "SageMaker supports both pre-built models and custom models developed by users."
      },
      {
        text: "It's completely free to use",
        correct: false,
        explanation: "While SageMaker offers some free tier options, it is not completely free and has associated costs based on usage."
      }
    ]
  },
  {
    text: "What is the primary purpose of Amazon Comprehend?",
    type: "single",
    domain: "Fundamentals of AI and ML",
    options: [
      {
        text: "To generate human-like text",
        correct: false,
        explanation: "Amazon Comprehend is not designed for text generation; it's used for natural language processing and analysis."
      },
      {
        text: "To translate text between languages",
        correct: false,
        explanation: "Translation is primarily handled by Amazon Translate, not Amazon Comprehend."
      },
      {
        text: "To extract insights and relationships from text data",
        correct: true,
        explanation: "Amazon Comprehend uses natural language processing to extract insights, sentiment, and relationships from text data."
      },
      {
        text: "To convert speech to text",
        correct: false,
        explanation: "Speech-to-text conversion is handled by Amazon Transcribe, not Amazon Comprehend."
      }
    ]
  },
  // Domain 2: Fundamentals of Generative AI
  {
    text: "What is a key characteristic of generative AI models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "They can only classify existing data",
        correct: false,
        explanation: "Generative AI models are not limited to classification; they can create new content."
      },
      {
        text: "They can create new, original content",
        correct: true,
        explanation: "Generative AI models are designed to create new, original content such as text, images, or even code based on patterns learned from training data."
      },
      {
        text: "They always require supervised learning",
        correct: false,
        explanation: "Generative AI models can use various learning approaches, including unsupervised and semi-supervised methods."
      },
      {
        text: "They can only work with numerical data",
        correct: false,
        explanation: "Generative AI models can work with various types of data, including text, images, and audio, not just numerical data."
      }
    ]
  },
  {
    text: "What is the primary function of a tokenizer in a large language model?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To generate new text",
        correct: false,
        explanation: "Generating new text is the role of the model itself, not the tokenizer."
      },
      {
        text: "To convert text into a sequence of tokens that the model can process",
        correct: true,
        explanation: "A tokenizer breaks down input text into tokens (words, subwords, or characters) that the model can understand and process."
      },
      {
        text: "To translate text between languages",
        correct: false,
        explanation: "Translation is a separate task, not the primary function of a tokenizer."
      },
      {
        text: "To compress the input data",
        correct: false,
        explanation: "While tokenization can result in some data compression, this is not its primary purpose in language models."
      }
    ]
  },
  {
    text: "What is the purpose of the attention mechanism in transformer models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To reduce the model size",
        correct: false,
        explanation: "The attention mechanism doesn't primarily serve to reduce model size."
      },
      {
        text: "To enable the model to focus on relevant parts of the input when generating output",
        correct: true,
        explanation: "The attention mechanism allows the model to weigh the importance of different parts of the input when generating each part of the output, improving context understanding and generation quality."
      },
      {
        text: "To speed up model training",
        correct: false,
        explanation: "While attention can lead to more efficient training in some cases, this is not its primary purpose."
      },
      {
        text: "To eliminate the need for large datasets",
        correct: false,
        explanation: "The attention mechanism doesn't reduce the need for large datasets in training transformer models."
      }
    ]
  },
  {
    text: "What is a key advantage of using foundation models in generative AI?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "They require very little training data",
        correct: false,
        explanation: "Foundation models actually require vast amounts of training data to achieve their capabilities."
      },
      {
        text: "They can only be used for text generation",
        correct: false,
        explanation: "Foundation models can be used for various tasks beyond text generation, including image generation, code completion, and more."
      },
      {
        text: "They can be fine-tuned for specific tasks with relatively little additional data",
        correct: true,
        explanation: "A key advantage of foundation models is that they can be adapted to specific tasks through fine-tuning with relatively small amounts of task-specific data, leveraging their broad pre-trained knowledge."
      },
      {
        text: "They eliminate the need for task-specific models",
        correct: false,
        explanation: "While foundation models are versatile, task-specific models can still be valuable for certain applications."
      }
    ]
  },
  {
    text: "What is a key characteristic of diffusion models in generative AI?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "They can only generate text",
        correct: false,
        explanation: "Diffusion models are not limited to text generation; they are often used for image generation."
      },
      {
        text: "They learn to reverse a gradual noising process",
        correct: true,
        explanation: "Diffusion models work by learning to reverse a gradual noising process, starting with random noise and iteratively denoising it to produce coherent output."
      },
      {
        text: "They require less training data than other models",
        correct: false,
        explanation: "Diffusion models, like other generative AI models, typically require large amounts of training data."
      },
      {
        text: "They can only work with structured data",
        correct: false,
        explanation: "Diffusion models can work with various types of data, including unstructured data like images."
      }
    ]
  },
  {
    text: "What is the purpose of the decoder in a transformer-based language model?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To compress the input data",
        correct: false,
        explanation: "Compression is not the primary function of the decoder in a transformer model."
      },
      {
        text: "To tokenize the input text",
        correct: false,
        explanation: "Tokenization is typically done before the input reaches the transformer model, not by the decoder."
      },
      {
        text: "To generate the output sequence based on the encoded input",
        correct: true,
        explanation: "The decoder in a transformer model is responsible for generating the output sequence, using the encoded input and previously generated tokens."
      },
      {
        text: "To translate between languages",
        correct: false,
        explanation: "While translation models use decoders, this is not the general purpose of a decoder in all transformer models."
      }
    ]
  },
  {
    text: "What is a key advantage of using transfer learning in generative AI?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It eliminates the need for any training data",
        correct: false,
        explanation: "Transfer learning still requires some training data, albeit typically less than training from scratch."
      },
      {
        text: "It allows models to leverage knowledge from pre-training on large datasets",
        correct: true,
        explanation: "Transfer learning enables models to use knowledge gained from pre-training on large, general datasets when learning new, specific tasks, often improving performance and reducing required training data."
      },
      {
        text: "It guarantees 100% accuracy on all tasks",
        correct: false,
        explanation: "No learning method guarantees 100% accuracy; performance depends on various factors."
      },
      {
        text: "It only works for image generation tasks",
        correct: false,
        explanation: "Transfer learning can be applied to various AI tasks, not just image generation."
      }
    ]
  },
  {
    text: "What is the primary purpose of fine-tuning in generative AI models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To increase the model's size",
        correct: false,
        explanation: "Fine-tuning doesn't necessarily increase the model's size; it adjusts existing parameters."
      },
      {
        text: "To adapt a pre-trained model to a specific task or domain",
        correct: true,
        explanation: "Fine-tuning allows a pre-trained model to be adapted to perform well on a specific task or domain by training on a smaller, task-specific dataset."
      },
      {
        text: "To completely retrain the model from scratch",
        correct: false,
        explanation: "Fine-tuning adjusts an existing model rather than retraining it entirely from scratch."
      },
      {
        text: "To reduce the model's memory usage",
        correct: false,
        explanation: "Reducing memory usage is not the primary goal of fine-tuning; it's about improving performance on specific tasks."
      }
    ]
  },
  {
    text: "What is a key characteristic of generative adversarial networks (GANs)?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "They only work with text data",
        correct: false,
        explanation: "GANs can work with various types of data, including images, not just text."
      },
      {
        text: "They use two competing neural networks: a generator and a discriminator",
        correct: true,
        explanation: "GANs consist of two neural networks—a generator that creates data and a discriminator that tries to distinguish real from generated data—competing in a game-theoretic scenario."
      },
      {
        text: "They require no training data",
        correct: false,
        explanation: "GANs, like other AI models, require training data to learn."
      },
      {
        text: "They can only be used for classification tasks",
        correct: false,
        explanation: "GANs are primarily used for generation tasks, not classification."
      }
    ]
  },
  {
    text: "What is the role of the latent space in generative AI models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To store the training data",
        correct: false,
        explanation: "The latent space doesn't store training data; it's a compressed representation of data features."
      },
      {
        text: "To provide a compressed, meaningful representation of data features",
        correct: true,
        explanation: "The latent space in generative models provides a lower-dimensional representation of data features, allowing for efficient manipulation and generation of new data."
      },
      {
        text: "To directly output the final generated content",
        correct: false,
        explanation: "The latent space is an intermediate representation, not the final output of the model."
      },
      {
        text: "To increase the model's processing speed",
        correct: false,
        explanation: "While working in the latent space can be computationally efficient, increasing processing speed is not its primary role."
      }
    ]
  },
  {
    text: "What is a key advantage of using Amazon Bedrock for generative AI applications?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It provides free, unlimited access to all AI models",
        correct: false,
        explanation: "Amazon Bedrock is not a free service and does not provide unlimited access to all AI models."
      },
      {
        text: "It allows access to various foundation models through a unified API",
        correct: true,
        explanation: "Amazon Bedrock provides access to various foundation models from different providers through a single, unified API, simplifying the development of generative AI applications."
      },
      {
        text: "It automatically creates custom AI models without any input",
        correct: false,
        explanation: "While Bedrock simplifies AI development, it doesn't automatically create custom models without any input."
      },
      {
        text: "It only works with text-based models",
        correct: false,
        explanation: "Amazon Bedrock supports various types of models, not just text-based ones."
      }
    ]
  },
  {
    text: "What is the primary purpose of prompt engineering in generative AI?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To create new AI models",
        correct: false,
        explanation: "Prompt engineering doesn't create new models; it's about crafting effective inputs for existing models."
      },
      {
        text: "To optimize the hardware for AI processing",
        correct: false,
        explanation: "Prompt engineering is not related to hardware optimization."
      },
      {
        text: "To craft effective inputs that guide the AI model to produce desired outputs",
        correct: true,
        explanation: "Prompt engineering involves designing and refining the text prompts given to an AI model to guide it towards producing the desired outputs or behaviors."
      },
      {
        text: "To eliminate the need for model training",
        correct: false,
        explanation: "Prompt engineering doesn't replace model training; it's a technique used with trained models."
      }
    ]
  },
  {
    text: "What is a key characteristic of multimodal foundation models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "They can only process text data",
        correct: false,
        explanation: "Multimodal models are not limited to text; they can process multiple types of data."
      },
      {
        text: "They require less training data than unimodal models",
        correct: false,
        explanation: "Multimodal models typically require large amounts of diverse data for training."
      },
      {
        text: "They can process and generate multiple types of data, such as text and images",
        correct: true,
        explanation: "Multimodal foundation models can understand and work with multiple types of data inputs and outputs, such as text, images, and sometimes audio or video."
      },
      {
        text: "They are always smaller in size compared to unimodal models",
        correct: false,
        explanation: "Multimodal models are often larger than unimodal models due to their ability to handle multiple data types."
      }
    ]
  },
  {
    text: "What is the primary advantage of using retrieval-augmented generation (RAG) in generative AI?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It eliminates the need for large language models",
        correct: false,
        explanation: "RAG doesn't eliminate the need for large language models; it enhances their capabilities."
      },
      {
        text: "It allows the model to access and use external, up-to-date information",
        correct: true,
        explanation: "RAG enables generative AI models to access and incorporate external, potentially more current information when generating responses, improving accuracy and relevance."
      },
      {
        text: "It speeds up the training process of AI models",
        correct: false,
        explanation: "RAG is used during inference, not during the training process."
      },
      {
        text: "It reduces the computational requirements for running AI models",
        correct: false,
        explanation: "RAG might actually increase computational requirements as it involves additional retrieval steps."
      }
    ]
  },
  {
    text: "What is a key feature of Amazon SageMaker JumpStart in the context of generative AI?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It creates custom AI models without any coding",
        correct: false,
        explanation: "While JumpStart simplifies model deployment, it doesn't create custom models without any input or coding."
      },
      {
        text: "It provides pre-trained models that can be easily deployed or fine-tuned",
        correct: true,
        explanation: "Amazon SageMaker JumpStart offers a variety of pre-trained models, including generative AI models, that can be easily deployed or fine-tuned for specific tasks."
      },
      {
        text: "It's a standalone generative AI model",
        correct: false,
        explanation: "JumpStart is not a model itself, but a feature of SageMaker that provides access to various models."
      },
      {
        text: "It only works with computer vision models",
        correct: false,
        explanation: "JumpStart supports various types of models, not just computer vision models."
      }
    ]
  },
  {
    text: "What is the primary purpose of the embedding layer in a generative AI model?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To generate the final output of the model",
        correct: false,
        explanation: "The embedding layer is an early stage in the model, not responsible for generating the final output."
      },
      {
        text: "To convert discrete tokens into continuous vector representations",
        correct: true,
        explanation: "The embedding layer transforms discrete input tokens (like words) into continuous vector representations that capture semantic meanings and relationships."
      },
      {
        text: "To compress the input data",
        correct: false,
        explanation: "While embeddings can be more compact than one-hot encodings, compression is not their primary purpose."
      },
      {
        text: "To translate between languages",
        correct: false,
        explanation: "Embedding layers are used in various NLP tasks, including translation, but they don't perform translation themselves."
      }
    ]
  },
  {
    text: "What is a key characteristic of zero-shot learning in generative AI?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It requires extensive fine-tuning for each new task",
        correct: false,
        explanation: "Zero-shot learning is characterized by not requiring task-specific training or fine-tuning."
      },
      {
        text: "It can only be used for classification tasks",
        correct: false,
        explanation: "Zero-shot learning can be applied to various tasks, not just classification."
      },
      {
        text: "It allows models to perform tasks they weren't explicitly trained on",
        correct: true,
        explanation: "Zero-shot learning enables models to perform new tasks or work with new categories that were not explicitly seen during training, based on their general knowledge and understanding."
      },
      {
        text: "It works only with small datasets",
        correct: false,
        explanation: "Zero-shot learning is not limited to small datasets; it's about the model's ability to generalize, not the size of the data."
      }
    ]
  },
  {
    text: "What is the primary purpose of the softmax function in generative language models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To compress the input data",
        correct: false,
        explanation: "The softmax function is not used for data compression."
      },
      {
        text: "To convert model outputs into a probability distribution over possible next tokens",
        correct: true,
        explanation: "The softmax function takes the raw output scores of the model and converts them into a probability distribution over the possible next tokens, allowing for probabilistic token selection."
      },
      {
        text: "To increase the model's processing speed",
        correct: false,
        explanation: "The softmax function is not primarily used to increase processing speed."
      },
      {
        text: "To reduce the model's memory usage",
        correct: false,
        explanation: "Reducing memory usage is not the primary purpose of the softmax function."
      }
    ]
  },
  {
    text: "What is a key advantage of using Amazon Comprehend for natural language processing tasks?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It can generate human-like text",
        correct: false,
        explanation: "Amazon Comprehend is not primarily designed for text generation; it's focused on text analysis."
      },
      {
        text: "It provides pre-trained models for common NLP tasks without requiring machine learning expertise",
        correct: true,
        explanation: "Amazon Comprehend offers pre-trained models for various NLP tasks like entity recognition, sentiment analysis, and topic modeling, making it easy to use without extensive ML knowledge."
      },
      {
        text: "It can translate text between any two languages",
        correct: false,
        explanation: "Translation is primarily handled by Amazon Translate, not Amazon Comprehend."
      },
      {
        text: "It automatically creates custom AI models for each user",
        correct: false,
        explanation: "While Comprehend allows for some customization, it doesn't automatically create custom models for each user."
      }
    ]
  },
  {
    text: "What is the primary purpose of the temperature parameter in generative AI models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To control the physical temperature of the hardware",
        correct: false,
        explanation: "The temperature parameter is not related to physical hardware temperature."
      },
      {
        text: "To adjust the randomness or creativity of the model's outputs",
        correct: true,
        explanation: "The temperature parameter controls the randomness in the model's token selection process. Higher temperatures lead to more diverse and potentially creative outputs, while lower temperatures make the output more deterministic and focused."
      },
      {
        text: "To speed up the model's processing time",
        correct: false,
        explanation: "The temperature parameter doesn't directly affect processing speed."
      },
      {
        text: "To compress the model for easier storage",
        correct: false,
        explanation: "Temperature doesn't relate to model compression or storage."
      }
    ]
  },
  {
    text: "What is a key characteristic of few-shot learning in generative AI?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It requires extensive training data for each new task",
        correct: false,
        explanation: "Few-shot learning is characterized by using only a small number of examples, not extensive data."
      },
      {
        text: "It allows models to learn new tasks from just a few examples",
        correct: true,
        explanation: "Few-shot learning enables models to adapt to new tasks or concepts with only a small number of examples, leveraging their pre-existing knowledge."
      },
      {
        text: "It only works with image recognition tasks",
        correct: false,
        explanation: "Few-shot learning can be applied to various AI tasks, not just image recognition."
      },
      {
        text: "It completely retrains the model for each new task",
        correct: false,
        explanation: "Few-shot learning doesn't involve complete retraining; it adapts the model with minimal new data."
      }
    ]
  },
  {
    text: "What is the primary function of the Top-K sampling method in text generation?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To select the K most common words in the training data",
        correct: false,
        explanation: "Top-K sampling is not about selecting common words from the training data."
      },
      {
        text: "To limit the vocabulary size of the model",
        correct: false,
        explanation: "Top-K sampling doesn't limit the overall vocabulary size of the model."
      },
      {
        text: "To restrict token selection to the K most likely options",
        correct: true,
        explanation: "Top-K sampling restricts the model's token selection to only the K highest probability options at each step, balancing between diversity and quality in generated text."
      },
      {
        text: "To increase the speed of text generation",
        correct: false,
        explanation: "While Top-K can affect generation speed, this is not its primary purpose."
      }
    ]
  },
  {
    text: "What is a key advantage of using transformer models in generative AI?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "They require very little training data",
        correct: false,
        explanation: "Transformer models typically require large amounts of training data to be effective."
      },
      {
        text: "They can only be used for text generation tasks",
        correct: false,
        explanation: "Transformer models are versatile and can be used for various tasks beyond text generation."
      },
      {
        text: "They can process input sequences in parallel, improving efficiency",
        correct: true,
        explanation: "Transformer models can process entire input sequences in parallel, unlike recurrent models, which leads to improved training and inference efficiency, especially for longer sequences."
      },
      {
        text: "They eliminate the need for attention mechanisms",
        correct: false,
        explanation: "Transformer models actually rely heavily on attention mechanisms; they don't eliminate them."
      }
    ]
  },
  {
    text: "What is the primary purpose of the ROUGE metric in evaluating generative AI models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To measure the model's processing speed",
        correct: false,
        explanation: "ROUGE is not used to measure processing speed."
      },
      {
        text: "To evaluate the quality of generated summaries",
        correct: true,
        explanation: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is primarily used to evaluate the quality of automatically generated summaries by comparing them to human-generated reference summaries."
      },
      {
        text: "To assess the model's ability to generate novel ideas",
        correct: false,
        explanation: "While important, assessing novelty is not the primary purpose of ROUGE."
      },
      {
        text: "To measure the model's energy efficiency",
        correct: false,
        explanation: "ROUGE is not related to measuring energy efficiency of models."
      }
    ]
  },
  {
    text: "What is a key characteristic of the BERT (Bidirectional Encoder Representations from Transformers) model?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It can only process text in one direction",
        correct: false,
        explanation: "BERT is specifically designed to process text bidirectionally, not just in one direction."
      },
      {
        text: "It is primarily used for image generation",
        correct: false,
        explanation: "BERT is a text processing model, not an image generation model."
      },
      {
        text: "It uses bidirectional context to understand text",
        correct: true,
        explanation: "BERT uses bidirectional context, meaning it considers both left and right context simultaneously when processing text, leading to a more nuanced understanding of language."
      },
      {
        text: "It can only be used for translation tasks",
        correct: false,
        explanation: "While BERT can be used in translation, it's not limited to this task and is used in various NLP applications."
      }
    ]
  },
  {
    text: "What is the primary purpose of beam search in text generation models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To increase the randomness of generated text",
        correct: false,
        explanation: "Beam search actually aims to reduce randomness and find more probable sequences."
      },
      {
        text: "To find the most likely sequence of tokens",
        correct: true,
        explanation: "Beam search is a heuristic search algorithm used in text generation to find the most likely sequence of tokens by exploring multiple possible sequences simultaneously."
      },
      {
        text: "To compress the model for faster inference",
        correct: false,
        explanation: "Beam search is not a model compression technique."
      },
      {
        text: "To eliminate the need for a language model",
        correct: false,
        explanation: "Beam search is used with language models, not to replace them."
      }
    ]
  },
  {
    text: "What is a key advantage of using continuous pre-training in generative AI models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It eliminates the need for initial training",
        correct: false,
        explanation: "Continuous pre-training doesn't eliminate the need for initial training; it builds upon it."
      },
      {
        text: "It allows models to stay up-to-date with new information",
        correct: true,
        explanation: "Continuous pre-training enables models to incorporate new information and adapt to changing language use over time, keeping them more current and relevant."
      },
      {
        text: "It reduces the model's size",
        correct: false,
        explanation: "Continuous pre-training doesn't necessarily reduce model size."
      },
      {
        text: "It guarantees 100% accuracy in all tasks",
        correct: false,
        explanation: "No training method guarantees 100% accuracy across all tasks."
      }
    ]
  },
  {
    text: "What is the primary function of the GPT (Generative Pre-trained Transformer) architecture?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To classify images",
        correct: false,
        explanation: "GPT is primarily a text processing model, not an image classification model."
      },
      {
        text: "To generate human-like text based on input prompts",
        correct: true,
        explanation: "The GPT architecture is designed to generate coherent and contextually relevant text based on given prompts, using its pre-trained knowledge of language patterns."
      },
      {
        text: "To translate between languages",
        correct: false,
        explanation: "While GPT can be used for translation tasks, this is not its primary function."
      },
      {
        text: "To compress large datasets",
        correct: false,
        explanation: "GPT is not designed for data compression."
      }
    ]
  },
  {
    text: "What is a key characteristic of the T5 (Text-to-Text Transfer Transformer) model?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It can only process numerical data",
        correct: false,
        explanation: "T5 is designed to process text data, not just numerical data."
      },
      {
        text: "It frames all NLP tasks as text-to-text problems",
        correct: true,
        explanation: "T5 uniquely frames all NLP tasks, including classification, translation, and summarization, as text-to-text problems, providing a unified approach to various language tasks."
      },
      {
        text: "It can only be used for sentiment analysis",
        correct: false,
        explanation: "T5 is a versatile model that can be used for various NLP tasks, not just sentiment analysis."
      },
      {
        text: "It requires no training data",
        correct: false,
        explanation: "Like other AI models, T5 requires training data to function effectively."
      }
    ]
  },
  {
    text: "What is the primary purpose of the BLEU score in evaluating generative AI models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To measure the model's energy efficiency",
        correct: false,
        explanation: "BLEU is not related to measuring energy efficiency."
      },
      {
        text: "To evaluate the quality of machine translations",
        correct: true,
        explanation: "BLEU (Bilingual Evaluation Understudy) is primarily used to evaluate the quality of machine-translated text by comparing it to human-generated translations."
      },
      {
        text: "To assess the model's ability to generate novel ideas",
        correct: false,
        explanation: "While important, assessing novelty is not the primary purpose of BLEU."
      },
      {
        text: "To measure the model's processing speed",
        correct: false,
        explanation: "BLEU is not used to measure processing speed."
      }
    ]
  },
  {
    text: "What is a key advantage of using attention mechanisms in generative AI models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "They eliminate the need for training data",
        correct: false,
        explanation: "Attention mechanisms don't eliminate the need for training data."
      },
      {
        text: "They allow the model to focus on relevant parts of the input when generating output",
        correct: true,
        explanation: "Attention mechanisms enable the model to dynamically focus on different parts of the input when generating each part of the output, improving the model's ability to handle long-range dependencies and context."
      },
      {
        text: "They guarantee that the model will never make mistakes",
        correct: false,
        explanation: "No mechanism can guarantee error-free performance in AI models."
      },
      {
        text: "They reduce the model's size",
        correct: false,
        explanation: "Attention mechanisms don't necessarily reduce model size; they often increase it."
      }
    ]
  },
  {
    text: "What is the primary function of the encoder in a seq2seq (sequence-to-sequence) model?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To generate the final output sequence",
        correct: false,
        explanation: "Generating the output sequence is typically the role of the decoder, not the encoder."
      },
      {
        text: "To compress the input data",
        correct: false,
        explanation: "While encoding can result in a compressed representation, this is not the primary function of the encoder in seq2seq models."
      },
      {
        text: "To process the input sequence and create a meaningful representation",
        correct: true,
        explanation: "The encoder in a seq2seq model processes the input sequence and creates a meaningful representation or context vector that captures the essence of the input, which is then used by the decoder."
      },
      {
        text: "To translate between languages",
        correct: false,
        explanation: "While seq2seq models can be used for translation, the encoder itself doesn't perform translation; it's part of the overall process."
      }
    ]
  },
  {
    text: "What is a key characteristic of the DALL-E model?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "It can only process numerical data",
        correct: false,
        explanation: "DALL-E is not limited to numerical data; it works with text and images."
      },
      {
        text: "It generates images from textual descriptions",
        correct: true,
        explanation: "DALL-E is designed to generate diverse and creative images based on textual descriptions, showcasing the ability to understand and visually represent complex text prompts."
      },
      {
        text: "It's primarily used for speech recognition",
        correct: false,
        explanation: "DALL-E is not a speech recognition model; it's an image generation model."
      },
      {
        text: "It can only work with pre-existing images",
        correct: false,
        explanation: "DALL-E can generate new images, not just work with pre-existing ones."
      }
    ]
  },
  {
    text: "What is the primary purpose of the perplexity metric in language models?",
    type: "single",
    domain: "Fundamentals of Generative AI",
    options: [
      {
        text: "To measure the model's energy consumption",
        correct: false,
        explanation: "Perplexity is not related to energy consumption measurement."
      },
      {
        text: "To evaluate how well the model predicts a sample",
        correct: true,
        explanation: "Perplexity is used to evaluate how well a probability distribution predicts a sample. In language models, lower perplexity indicates better prediction of the sample text."
      },
      {
        text: "To count the number of parameters in the model",
        correct: false,
        explanation: "Perplexity doesn't count model parameters; it's a measure of prediction quality."
      },
      {
        text: "To increase the model's vocabulary size",
        correct: false,
        explanation: "Perplexity is a measurement metric, not a method to increase vocabulary size."
      }
    ]
  },
  // Domain 3: Applications of Foundation Models

{
  text: "What is a key consideration when selecting a pre-trained model for a specific task?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "The model's color scheme",
      correct: false,
      explanation: "The color scheme is not a relevant factor in selecting a pre-trained model."
    },
    {
      text: "The model's performance on relevant benchmarks",
      correct: true,
      explanation: "When selecting a pre-trained model, it's crucial to consider its performance on benchmarks relevant to your specific task to ensure it can meet your requirements."
    },
    {
      text: "The model's popularity on social media",
      correct: false,
      explanation: "While popularity might indicate a model's effectiveness, it's not a key consideration for task-specific selection."
    },
    {
      text: "The model's release date",
      correct: false,
      explanation: "While newer models might have improvements, the release date alone is not a key consideration for task-specific selection."
    }
  ]
},
{
  text: "What is the primary purpose of fine-tuning a foundation model?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "To make the model smaller",
      correct: false,
      explanation: "Fine-tuning doesn't primarily aim to reduce model size."
    },
    {
      text: "To adapt the model to a specific task or domain",
      correct: true,
      explanation: "Fine-tuning is used to adapt a pre-trained foundation model to perform well on a specific task or domain, often with a smaller amount of task-specific data."
    },
    {
      text: "To increase the model's general knowledge",
      correct: false,
      explanation: "While fine-tuning can add specific knowledge, increasing general knowledge is typically done during pre-training, not fine-tuning."
    },
    {
      text: "To change the model's architecture",
      correct: false,
      explanation: "Fine-tuning typically doesn't involve changing the model's architecture, but rather adjusting its parameters."
    }
  ]
},
{
  text: "What is Retrieval Augmented Generation (RAG) in the context of foundation models?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "A technique to compress model size",
      correct: false,
      explanation: "RAG is not a model compression technique."
    },
    {
      text: "A method to generate training data",
      correct: false,
      explanation: "While RAG can enhance outputs, it's not primarily used to generate training data."
    },
    {
      text: "A way to incorporate external knowledge into model responses",
      correct: true,
      explanation: "RAG allows foundation models to access and incorporate external, potentially more current information when generating responses, improving accuracy and relevance."
    },
    {
      text: "A technique to increase model training speed",
      correct: false,
      explanation: "RAG is used during inference, not to speed up model training."
    }
  ]
},
{
  text: "Which AWS service is designed to store and query vector embeddings for use with foundation models?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "Amazon DynamoDB",
      correct: false,
      explanation: "While DynamoDB is a database service, it's not specifically designed for vector embeddings."
    },
    {
      text: "Amazon S3",
      correct: false,
      explanation: "Amazon S3 is object storage and not optimized for querying vector embeddings."
    },
    {
      text: "Amazon OpenSearch Service",
      correct: true,
      explanation: "Amazon OpenSearch Service provides capabilities for storing and querying vector embeddings, making it suitable for use with foundation models in applications like semantic search and recommendations."
    },
    {
      text: "Amazon RDS",
      correct: false,
      explanation: "Amazon RDS is for relational databases and not optimized for vector embeddings."
    }
  ]
},
{
  text: "What is the role of 'agents' in multi-step tasks when using foundation models?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "To replace human involvement entirely",
      correct: false,
      explanation: "Agents are not designed to entirely replace humans, but to assist in complex tasks."
    },
    {
      text: "To coordinate and execute multiple steps in complex tasks",
      correct: true,
      explanation: "Agents in the context of foundation models are designed to break down complex tasks into steps, coordinate their execution, and often interact with external tools or APIs to complete multi-step processes."
    },
    {
      text: "To speed up model training",
      correct: false,
      explanation: "Agents are typically used during inference for task completion, not for model training."
    },
    {
      text: "To reduce the size of the foundation model",
      correct: false,
      explanation: "Agents don't affect the size of the foundation model; they're an additional component for task execution."
    }
  ]
},
{
  text: "What is a key benefit of using in-context learning with foundation models?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "It permanently changes the model's weights",
      correct: false,
      explanation: "In-context learning doesn't permanently alter the model's weights."
    },
    {
      text: "It allows the model to adapt to specific tasks without fine-tuning",
      correct: true,
      explanation: "In-context learning enables foundation models to adapt to specific tasks or contexts by providing examples or instructions within the prompt, without the need for model fine-tuning."
    },
    {
      text: "It reduces the model's memory usage",
      correct: false,
      explanation: "In-context learning doesn't primarily affect the model's memory usage."
    },
    {
      text: "It eliminates the need for prompts",
      correct: false,
      explanation: "In-context learning actually relies heavily on well-crafted prompts that include context or examples."
    }
  ]
},
{
  text: "What is the primary purpose of prompt engineering in applications of foundation models?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "To create new foundation models",
      correct: false,
      explanation: "Prompt engineering doesn't create new models, but optimizes the use of existing ones."
    },
    {
      text: "To optimize hardware for model running",
      correct: false,
      explanation: "Prompt engineering is about input design, not hardware optimization."
    },
    {
      text: "To design effective inputs that guide the model to produce desired outputs",
      correct: true,
      explanation: "Prompt engineering involves crafting and refining the text prompts given to a foundation model to guide it towards producing the desired outputs or behaviors for specific applications."
    },
    {
      text: "To replace the need for model training",
      correct: false,
      explanation: "While prompt engineering can enhance model performance, it doesn't replace the need for initial model training."
    }
  ]
},
{
  text: "What is the 'chain-of-thought' technique in prompt engineering?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "A method to link multiple models together",
      correct: false,
      explanation: "Chain-of-thought doesn't involve linking multiple models."
    },
    {
      text: "A way to visualize the model's internal processes",
      correct: false,
      explanation: "While it can provide insight into reasoning, it doesn't directly visualize internal processes."
    },
    {
      text: "A prompting strategy that encourages step-by-step reasoning",
      correct: true,
      explanation: "The chain-of-thought technique involves prompting the model to break down its reasoning process into steps, often improving performance on complex tasks that require multi-step reasoning."
    },
    {
      text: "A technique to speed up model inference",
      correct: false,
      explanation: "Chain-of-thought is about improving reasoning quality, not speeding up inference."
    }
  ]
},
{
  text: "What is the primary advantage of using few-shot learning with foundation models?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "It eliminates the need for any examples",
      correct: false,
      explanation: "Few-shot learning still requires some examples, just fewer than traditional methods."
    },
    {
      text: "It allows the model to learn new tasks with minimal examples",
      correct: true,
      explanation: "Few-shot learning enables foundation models to adapt to new tasks or concepts with only a small number of examples, leveraging their pre-existing knowledge."
    },
    {
      text: "It always produces perfect results",
      correct: false,
      explanation: "While effective, few-shot learning doesn't guarantee perfect results in all cases."
    },
    {
      text: "It works only for image recognition tasks",
      correct: false,
      explanation: "Few-shot learning can be applied to various AI tasks, not just image recognition."
    }
  ]
},
{
  text: "What is the main purpose of using embeddings in applications of foundation models?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "To compress the model size",
      correct: false,
      explanation: "Embeddings are not primarily used for model compression."
    },
    {
      text: "To represent data in a dense vector space",
      correct: true,
      explanation: "Embeddings are used to represent discrete data (like words or items) as continuous vectors in a high-dimensional space, capturing semantic relationships and enabling efficient processing and comparison."
    },
    {
      text: "To encrypt sensitive information",
      correct: false,
      explanation: "While embeddings can obscure original data, they're not designed for encryption."
    },
    {
      text: "To generate human-readable outputs",
      correct: false,
      explanation: "Embeddings are typically not directly human-readable; they're intermediate representations used by the model."
    }
  ]
},
{
  text: "What is the primary purpose of the temperature parameter in text generation applications?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "To control the model's processing speed",
      correct: false,
      explanation: "Temperature doesn't directly affect processing speed."
    },
    {
      text: "To adjust the randomness of the model's outputs",
      correct: true,
      explanation: "The temperature parameter controls the randomness in the model's token selection process. Higher temperatures lead to more diverse and potentially creative outputs, while lower temperatures make the output more deterministic and focused."
    },
    {
      text: "To change the model's vocabulary size",
      correct: false,
      explanation: "Temperature doesn't affect the model's vocabulary size."
    },
    {
      text: "To alter the model's training data",
      correct: false,
      explanation: "Temperature is an inference-time parameter and doesn't affect the model's training data."
    }
  ]
},
{
  text: "What is the main advantage of using Amazon Bedrock for deploying foundation model applications?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "It provides unlimited free access to all AI models",
      correct: false,
      explanation: "Amazon Bedrock is not a free service and does not provide unlimited access."
    },
    {
      text: "It allows access to various foundation models through a unified API",
      correct: true,
      explanation: "Amazon Bedrock provides access to various foundation models from different providers through a single, unified API, simplifying the development and deployment of AI applications."
    },
    {
      text: "It automatically creates custom AI models",
      correct: false,
      explanation: "While Bedrock simplifies AI development, it doesn't automatically create custom models."
    },
    {
      text: "It eliminates the need for any coding",
      correct: false,
      explanation: "While Bedrock simplifies many aspects, it doesn't eliminate the need for all coding in AI application development."
    }
  ]
},
{
  text: "What is the primary purpose of fine-tuning a foundation model with domain-specific data?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "To make the model faster",
      correct: false,
      explanation: "Fine-tuning with domain-specific data doesn't primarily aim to increase model speed."
    },
    {
      text: "To reduce the model's size",
      correct: false,
      explanation: "Fine-tuning typically doesn't reduce model size."
    },
    {
      text: "To improve the model's performance on domain-specific tasks",
      correct: true,
      explanation: "Fine-tuning with domain-specific data aims to adapt the model to perform better on tasks within that specific domain, improving its accuracy and relevance for domain-specific applications."
    },
    {
      text: "To make the model more general-purpose",
      correct: false,
      explanation: "Fine-tuning with domain-specific data actually makes the model more specialized, not more general-purpose."
    }
  ]
},
{
  text: "What is the main benefit of using a vector database with foundation models?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "To replace the foundation model entirely",
      correct: false,
      explanation: "Vector databases complement foundation models, not replace them."
    },
    {
      text: "To store and efficiently query high-dimensional vector representations",
      correct: true,
      explanation: "Vector databases are optimized to store and efficiently query high-dimensional vector representations (embeddings), enabling fast similarity searches and enhancing the capabilities of foundation models in applications like semantic search and recommendations."
    },
    {
      text: "To train new foundation models",
      correct: false,
      explanation: "Vector databases are not used to train new models, but to store and query vector representations."
    },
    {
      text: "To generate human-readable text",
      correct: false,
      explanation: "Vector databases store and query vectors; they don't generate human-readable text directly."
    }
  ]
},
{
  text: "What is the primary purpose of using Retrieval Augmented Generation (RAG) in chatbot applications?",
  type: "single",
  domain: "Applications of Foundation Models",
  options: [
    {
      text: "To eliminate the need for a foundation model",
      correct: false,
      explanation: "RAG enhances foundation models, it doesn't eliminate the need for them."
    },
    {
      text: "To provide more accurate and context-specific responses",
      correct: true,
      explanation: "RAG allows chatbots to retrieve relevant information from external sources and incorporate it into their responses, leading to more accurate, up-to-date, and context-specific answers."
    },
    {
      text: "To speed up the chatbot's response time",
      correct: false,
      explanation: "While RAG can improve response quality, it doesn't necessarily speed up response time."
    },
    {
      text: "To reduce the cost of running the chatbot",
      correct: false,
      explanation: "RAG might actually increase computational costs due to the additional retrieval step."
    }
  ]
},
// Domain 4: Guidelines for Responsible AI

{
  text: "What is a key principle of responsible AI?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "Maximizing profit at all costs",
      correct: false,
      explanation: "Responsible AI is not primarily about profit maximization, but about ethical and beneficial use of AI."
    },
    {
      text: "Ensuring fairness and non-discrimination in AI systems",
      correct: true,
      explanation: "A key principle of responsible AI is to ensure that AI systems are fair and do not discriminate against individuals or groups based on protected characteristics."
    },
    {
      text: "Keeping AI development completely secret",
      correct: false,
      explanation: "Transparency, not secrecy, is often a principle of responsible AI."
    },
    {
      text: "Using AI to replace all human decision-making",
      correct: false,
      explanation: "Responsible AI aims to augment human decision-making, not necessarily replace it entirely."
    }
  ]
},
{
  text: "What is 'bias' in the context of AI systems?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "A feature that improves AI performance",
      correct: false,
      explanation: "Bias in AI is generally considered a problem to be mitigated, not a performance-enhancing feature."
    },
    {
      text: "Systematic errors that can lead to unfair outcomes",
      correct: true,
      explanation: "In AI, bias refers to systematic errors in the system that can lead to unfair or discriminatory outcomes for certain groups or individuals."
    },
    {
      text: "A way to speed up AI processing",
      correct: false,
      explanation: "Bias doesn't speed up processing; it's a quality issue in the outputs or decisions of AI systems."
    },
    {
      text: "The AI's personal opinions",
      correct: false,
      explanation: "AI systems don't have personal opinions; bias refers to systematic errors or unfairness in their outputs."
    }
  ]
},
{
  text: "What is the purpose of 'explainable AI' in responsible AI development?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "To make AI systems more complex",
      correct: false,
      explanation: "Explainable AI aims to make AI decisions more understandable, not more complex."
    },
    {
      text: "To enable understanding and interpretation of AI decisions",
      correct: true,
      explanation: "Explainable AI aims to make the decision-making processes of AI systems more transparent and interpretable, allowing humans to understand how and why the AI arrived at a particular outcome."
    },
    {
      text: "To hide the workings of AI systems",
      correct: false,
      explanation: "Explainable AI is about transparency, not hiding the workings of AI systems."
    },
    {
      text: "To make AI systems run faster",
      correct: false,
      explanation: "Explainability is about understanding, not improving processing speed."
    }
  ]
},
{
  text: "What is a key consideration in ensuring AI privacy?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "Collecting as much data as possible",
      correct: false,
      explanation: "Collecting excessive data can be a privacy risk; responsible AI often involves minimizing data collection."
    },
    {
      text: "Protecting personal data and ensuring informed consent",
      correct: true,
      explanation: "Ensuring AI privacy involves protecting personal data from unauthorized access or misuse, and obtaining informed consent for data collection and use."
    },
    {
      text: "Sharing all data publicly",
      correct: false,
      explanation: "Indiscriminate public sharing of data would violate privacy principles."
    },
    {
      text: "Using AI to monitor all user activities",
      correct: false,
      explanation: "Extensive monitoring without consent would be a privacy violation, not a privacy protection measure."
    }
  ]
},
{
  text: "What is the primary goal of 'fairness' in responsible AI?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "To make all AI outputs identical",
      correct: false,
      explanation: "Fairness doesn't mean identical outputs, but rather ensuring equitable treatment and outcomes."
    },
    {
      text: "To ensure AI systems don't discriminate unfairly",
      correct: true,
      explanation: "The primary goal of fairness in responsible AI is to ensure that AI systems do not unfairly discriminate against individuals or groups based on protected characteristics like race, gender, or age."
    },
    {
      text: "To make AI systems less accurate",
      correct: false,
      explanation: "Fairness aims to improve the overall quality of AI outputs, not reduce accuracy."
    },
    {
      text: "To limit AI capabilities",
      correct: false,
      explanation: "Fairness is about improving AI's societal impact, not limiting its capabilities."
    }
  ]
},
{
  text: "What is 'accountability' in the context of responsible AI?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "Blaming AI for all errors",
      correct: false,
      explanation: "Accountability isn't about blanket blame, but about responsible oversight and management."
    },
    {
      text: "Ensuring there's a responsible party for AI decisions and impacts",
      correct: true,
      explanation: "Accountability in responsible AI means ensuring that there are clear lines of responsibility for the decisions and impacts of AI systems, including mechanisms for redress when things go wrong."
    },
    {
      text: "Making AI systems fully autonomous",
      correct: false,
      explanation: "Full autonomy without oversight would contradict the principle of accountability."
    },
    {
      text: "Hiding the details of AI operations",
      correct: false,
      explanation: "Accountability often requires transparency, not hiding operational details."
    }
  ]
},
{
  text: "What is the purpose of 'ethics boards' in AI companies?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "To maximize company profits",
      correct: false,
      explanation: "Ethics boards are not primarily concerned with profit maximization."
    },
    {
      text: "To provide guidance on ethical implications of AI development and use",
      correct: true,
      explanation: "AI ethics boards are typically established to provide guidance and oversight on the ethical implications and societal impacts of a company's AI development and deployment."
    },
    {
      text: "To speed up AI development",
      correct: false,
      explanation: "Ethics boards focus on ethical considerations, not development speed."
    },
    {
      text: "To replace legal compliance teams",
      correct: false,
      explanation: "Ethics boards complement rather than replace legal compliance efforts."
    }
  ]
},
{
  text: "What is 'data governance' in responsible AI?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "Collecting all available data",
      correct: false,
      explanation: "Data governance is not about indiscriminate data collection."
    },
    {
      text: "Ignoring data privacy concerns",
      correct: false,
      explanation: "Data governance actually emphasizes addressing privacy concerns."
    },
    {
      text: "Managing data collection, use, and security responsibly",
      correct: true,
      explanation: "Data governance in responsible AI involves managing the entire lifecycle of data, including its collection, use, storage, and security, in a way that is ethical, compliant with regulations, and respectful of individual privacy."
    },
    {
      text: "Deleting all data after use",
      correct: false,
      explanation: "While data deletion can be part of governance, it's not the entirety of it and isn't always appropriate."
    }
  ]
},
{
  text: "What is the role of 'human oversight' in responsible AI systems?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "To replace AI systems entirely",
      correct: false,
      explanation: "Human oversight complements AI systems, it doesn't replace them."
    },
    {
      text: "To monitor and intervene in AI decisions when necessary",
      correct: true,
      explanation: "Human oversight in responsible AI involves humans monitoring AI systems, understanding their decisions, and having the ability to intervene or override when necessary to ensure ethical and appropriate outcomes."
    },
    {
      text: "To slow down AI processing",
      correct: false,
      explanation: "The goal isn't to slow down processing, but to ensure responsible operation."
    },
    {
      text: "To make AI systems fully autonomous",
      correct: false,
      explanation: "Human oversight is about maintaining human control, not creating full autonomy."
    }
  ]
},
{
  text: "What is 'algorithmic bias' in AI systems?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "A feature that improves AI accuracy",
      correct: false,
      explanation: "Algorithmic bias is generally considered a problem, not a feature that improves accuracy."
    },
    {
      text: "Systematic errors in AI algorithms leading to unfair outcomes",
      correct: true,
      explanation: "Algorithmic bias refers to systematic and repeatable errors in AI systems that create unfair outcomes, such as privileging one arbitrary group of users over others."
    },
    {
      text: "The personal preferences of AI developers",
      correct: false,
      explanation: "While developer biases can contribute, algorithmic bias refers to systematic issues in the AI system itself."
    },
    {
      text: "A way to speed up AI decision making",
      correct: false,
      explanation: "Algorithmic bias is not about speeding up decisions, but about unfair or discriminatory outcomes."
    }
  ]
},
{
  text: "What is the primary goal of 'responsible AI' guidelines?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "To limit AI capabilities",
      correct: false,
      explanation: "Responsible AI isn't about limiting capabilities, but ensuring ethical use."
    },
    {
      text: "To ensure AI benefits society while minimizing harm",
      correct: true,
      explanation: "The primary goal of responsible AI guidelines is to ensure that AI systems are developed and used in ways that benefit society, respect human rights, and minimize potential harms or negative impacts."
    },
    {
      text: "To make AI development more expensive",
      correct: false,
      explanation: "Increasing cost is not a goal of responsible AI guidelines."
    },
    {
      text: "To replace human decision-making entirely",
      correct: false,
      explanation: "Responsible AI often emphasizes augmenting, not entirely replacing, human decision-making."
    }
  ]
},
{
  text: "What is 'transparency' in the context of responsible AI?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "Making all AI code public",
      correct: false,
      explanation: "While openness can be part of transparency, it doesn't necessarily mean making all code public."
    },
    {
      text: "Hiding how AI systems work",
      correct: false,
      explanation: "Transparency is the opposite of hiding how systems work."
    },
    {
      text: "Being open about AI capabilities, limitations, and decision-making processes",
      correct: true,
      explanation: "Transparency in responsible AI involves being clear and open about what AI systems can do, what their limitations are, and how they make decisions, allowing for scrutiny and understanding by users and stakeholders."
    },
    {
      text: "Using AI only for simple tasks",
      correct: false,
      explanation: "Transparency is about clarity in communication, not limiting AI to simple tasks."
    }
  ]
},
{
  text: "What is the purpose of 'AI impact assessments'?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "To increase AI system speed",
      correct: false,
      explanation: "Impact assessments are not about system speed, but about evaluating effects."
    },
    {
      text: "To evaluate potential societal and ethical impacts of AI systems",
      correct: true,
      explanation: "AI impact assessments are conducted to evaluate and anticipate the potential societal, ethical, and environmental impacts of AI systems before they are deployed, helping to identify and mitigate risks."
    },
    {
      text: "To make AI systems more complex",
      correct: false,
      explanation: "The goal is not to increase complexity, but to understand impacts."
    },
    {
      text: "To replace human decision-making",
      correct: false,
      explanation: "Impact assessments inform decision-making; they don't replace human involvement."
    }
  ]
},
{
  text: "What is 'data minimization' in responsible AI practices?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "Collecting as much data as possible",
      correct: false,
      explanation: "Data minimization is the opposite of collecting as much data as possible."
    },
    {
      text: "Deleting all data after use",
      correct: false,
      explanation: "While data deletion can be part of minimization, it's not the entire concept."
    },
    {
      text: "Collecting and using only the data necessary for the specific purpose",
      correct: true,
      explanation: "Data minimization involves collecting, processing, and retaining only the data that is necessary for the specific purpose of the AI system, helping to protect privacy and reduce risks."
    },
    {
      text: "Ignoring data protection regulations",
      correct: false,
      explanation: "Data minimization is part of complying with data protection regulations, not ignoring them."
    }
  ]
},
{
  text: "What is the primary concern with 'AI autonomy' in responsible AI discussions?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "AI systems becoming too slow",
      correct: false,
      explanation: "Speed is not the primary concern in discussions about AI autonomy."
    },
    {
      text: "AI not being able to make any decisions",
      correct: false,
      explanation: "The concern isn't about AI's inability to make decisions, but about the implications of autonomous decision-making."
    },
    {
      text: "Ensuring human control and accountability over AI decisions",
      correct: true,
      explanation: "A primary concern with AI autonomy is ensuring that there is appropriate human control and accountability over AI systems, especially for decisions that significantly impact individuals or society."
    },
    {
      text: "Making AI systems fully independent",
      correct: false,
      explanation: "Full independence of AI systems is often seen as a risk, not a goal, in responsible AI."
    }
  ]
},
{
  text: "What is 'AI safety' in the context of responsible AI?",
  type: "single",
  domain: "Guidelines for Responsible AI",
  options: [
    {
      text: "Protecting AI systems from hackers",
      correct: false,
      explanation: "While cybersecurity is important, AI safety has a broader scope."
    },
    {
      text: "Ensuring AI systems do not cause unintended harm",
      correct: true,
      explanation: "AI safety focuses on developing AI systems that reliably behave in intended ways and do not cause unintended harm to humans or the environment, even as they become more capable and autonomous."
    },
    {
      text: "Making AI systems physically secure",
      correct: false,
      explanation: "Physical security might be a part, but AI safety is primarily about the system's behavior and impacts."
    },
    {
      text: "Slowing down AI development",
      correct: false,
      explanation: "AI safety is about responsible development, not necessarily slowing it down."
    }
  ]
},
// Domain 5: Security, Compliance, and Governance for AI Solutions

{
  text: "What is the primary purpose of the AWS Shared Responsibility Model in AI security?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To make AWS solely responsible for all security aspects",
      correct: false,
      explanation: "The Shared Responsibility Model divides security responsibilities between AWS and the customer, not placing all responsibility on AWS."
    },
    {
      text: "To clarify security responsibilities between AWS and customers",
      correct: true,
      explanation: "The AWS Shared Responsibility Model clearly defines which security tasks are AWS's responsibility and which are the customer's, ensuring comprehensive coverage of security aspects in AI solutions."
    },
    {
      text: "To make customers solely responsible for all security aspects",
      correct: false,
      explanation: "The model doesn't place all responsibility on customers; it's a shared model."
    },
    {
      text: "To eliminate the need for security measures",
      correct: false,
      explanation: "The model emphasizes the importance of security measures, not eliminates them."
    }
  ]
},
{
  text: "What is the role of AWS Identity and Access Management (IAM) in securing AI solutions?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "IAM is not used for model training; it's a security service."
    },
    {
      text: "To manage and secure access to AWS resources",
      correct: true,
      explanation: "AWS IAM is used to securely control access to AWS services and resources, allowing you to manage who can access which resources and what actions they can perform."
    },
    {
      text: "To store AI training data",
      correct: false,
      explanation: "IAM is not a data storage service; it manages access to resources."
    },
    {
      text: "To optimize AI model performance",
      correct: false,
      explanation: "IAM is not involved in model performance optimization; it's for access management."
    }
  ]
},
{
  text: "What is the purpose of encryption in AI data security?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To make data processing faster",
      correct: false,
      explanation: "Encryption is not primarily about improving processing speed; it can sometimes slow it down."
    },
    {
      text: "To compress data for storage",
      correct: false,
      explanation: "While encryption can sometimes result in slight compression, this is not its primary purpose."
    },
    {
      text: "To protect data confidentiality and integrity",
      correct: true,
      explanation: "Encryption is used to protect the confidentiality and integrity of data, making it unreadable to unauthorized parties and ensuring it hasn't been tampered with."
    },
    {
      text: "To make data publicly accessible",
      correct: false,
      explanation: "Encryption is used to restrict access, not make data public."
    }
  ]
},
{
  text: "What is the main function of AWS CloudTrail in AI governance?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "CloudTrail is not a model training service."
    },
    {
      text: "To store AI training data",
      correct: false,
      explanation: "CloudTrail is not a data storage service."
    },
    {
      text: "To log and monitor account activity",
      correct: true,
      explanation: "AWS CloudTrail provides governance, compliance, operational auditing, and risk auditing of your AWS account by tracking user activity and API usage."
    },
    {
      text: "To optimize AI model performance",
      correct: false,
      explanation: "CloudTrail is not involved in model performance optimization."
    }
  ]
},
{
  text: "What is the purpose of data lineage in AI governance?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To increase data storage capacity",
      correct: false,
      explanation: "Data lineage is not about storage capacity."
    },
    {
      text: "To track the origin and transformation of data throughout its lifecycle",
      correct: true,
      explanation: "Data lineage tracks the origin, movement, and transformation of data throughout its lifecycle, which is crucial for understanding data provenance, ensuring data quality, and maintaining compliance in AI systems."
    },
    {
      text: "To compress data for faster processing",
      correct: false,
      explanation: "Data lineage is not about data compression or processing speed."
    },
    {
      text: "To encrypt data for security",
      correct: false,
      explanation: "While data lineage can support security efforts, it's not directly about encryption."
    }
  ]
},
{
  text: "What is the primary purpose of AWS Config in AI compliance?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "AWS Config is not a model training service."
    },
    {
      text: "To assess, audit, and evaluate AWS resource configurations",
      correct: true,
      explanation: "AWS Config allows you to assess, audit, and evaluate the configurations of your AWS resources, helping ensure compliance with internal policies and regulatory standards."
    },
    {
      text: "To store AI training data",
      correct: false,
      explanation: "AWS Config is not a data storage service."
    },
    {
      text: "To optimize AI model performance",
      correct: false,
      explanation: "AWS Config is not involved in model performance optimization."
    }
  ]
},
{
  text: "What is the role of AWS Key Management Service (KMS) in AI data security?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "KMS is not a model training service."
    },
    {
      text: "To store AI training data",
      correct: false,
      explanation: "KMS is not a data storage service."
    },
    {
      text: "To create and manage cryptographic keys",
      correct: true,
      explanation: "AWS KMS enables you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications, crucial for encrypting AI data and maintaining its security."
    },
    {
      text: "To optimize AI model performance",
      correct: false,
      explanation: "KMS is not involved in model performance optimization."
    }
  ]
},
{
  text: "What is the purpose of AWS SageMaker Model Monitor in AI governance?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "While SageMaker can train models, Model Monitor specifically is not for training."
    },
    {
      text: "To store AI training data",
      correct: false,
      explanation: "Model Monitor is not a data storage service."
    },
    {
      text: "To detect deviations in model quality",
      correct: true,
      explanation: "AWS SageMaker Model Monitor automatically detects deviations in model quality, such as data drift and model drift, helping ensure ongoing compliance and performance of deployed models."
    },
    {
      text: "To manage access to AWS resources",
      correct: false,
      explanation: "Model Monitor is not an access management service."
    }
  ]
},
{
  text: "What is the main purpose of data governance in AI solutions?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To make all data publicly accessible",
      correct: false,
      explanation: "Data governance often involves restricting access, not making all data public."
    },
    {
      text: "To delete all data after use",
      correct: false,
      explanation: "While data deletion can be part of governance, it's not the main purpose."
    },
    {
      text: "To ensure proper management, security, and use of data",
      correct: true,
      explanation: "Data governance in AI solutions aims to ensure that data is properly managed, secured, and used in compliance with regulations and organizational policies throughout its lifecycle."
    },
    {
      text: "To maximize data collection",
      correct: false,
      explanation: "Data governance often involves minimizing unnecessary data collection, not maximizing it."
    }
  ]
},
{
  text: "What is the role of AWS Artifact in AI compliance?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "AWS Artifact is not a model training service."
    },
    {
      text: "To provide access to AWS compliance reports and agreements",
      correct: true,
      explanation: "AWS Artifact provides on-demand access to AWS security and compliance reports and select online agreements, which is crucial for demonstrating compliance in AI solutions."
    },
    {
      text: "To store AI training data",
      correct: false,
      explanation: "AWS Artifact is not a data storage service."
    },
    {
      text: "To optimize AI model performance",
      correct: false,
      explanation: "AWS Artifact is not involved in model performance optimization."
    }
  ]
},
{
  text: "What is the primary purpose of AWS Macie in AI data security?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "Macie is not a model training service."
    },
    {
      text: "To store AI training data",
      correct: false,
      explanation: "Macie is not a data storage service."
    },
    {
      text: "To discover and protect sensitive data",
      correct: true,
      explanation: "AWS Macie uses machine learning to automatically discover, classify, and protect sensitive data in AWS, which is crucial for maintaining data security and compliance in AI solutions."
    },
    {
      text: "To optimize AI model performance",
      correct: false,
      explanation: "Macie is not involved in model performance optimization."
    }
  ]
},
{
  text: "What is the role of AWS Audit Manager in AI compliance?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "Audit Manager is not a model training service."
    },
    {
      text: "To continuously audit AWS usage for compliance",
      correct: true,
      explanation: "AWS Audit Manager helps you continuously audit your AWS usage to simplify how you assess risk and compliance with regulations and industry standards, which is crucial for maintaining compliance in AI solutions."
    },
    {
      text: "To store AI training data",
      correct: false,
      explanation: "Audit Manager is not a data storage service."
    },
    {
      text: "To optimize AI model performance",
      correct: false,
      explanation: "Audit Manager is not involved in model performance optimization."
    }
  ]
},
{
  text: "What is the purpose of data catalogs in AI governance?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "Data catalogs are not used to train models directly."
    },
    {
      text: "To store all AI data",
      correct: false,
      explanation: "Data catalogs don't store the actual data, but metadata about the data."
    },
    {
      text: "To provide a centralized metadata repository",
      correct: true,
      explanation: "Data catalogs provide a centralized metadata repository that helps organizations discover, understand, and manage their data assets, which is crucial for effective AI governance."
    },
    {
      text: "To replace data storage systems",
      correct: false,
      explanation: "Data catalogs complement, not replace, data storage systems."
    }
  ]
},
{
  text: "What is the main function of AWS GuardDuty in AI security?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "GuardDuty is not a model training service."
    },
    {
      text: "To store AI training data",
      correct: false,
      explanation: "GuardDuty is not a data storage service."
    },
    {
      text: "To provide intelligent threat detection",
      correct: true,
      explanation: "AWS GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads, including AI systems."
    },
    {
      text: "To optimize AI model performance",
      correct: false,
      explanation: "GuardDuty is not involved in model performance optimization."
    }
  ]
},
{
  text: "What is the purpose of data quality management in AI governance?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To increase data quantity",
      correct: false,
      explanation: "Data quality management focuses on improving quality, not necessarily quantity."
    },
    {
      text: "To ensure data accuracy, completeness, and consistency",
      correct: true,
      explanation: "Data quality management aims to ensure that data used in AI systems is accurate, complete, consistent, and fit for purpose, which is crucial for reliable AI outcomes and compliance."
    },
    {
      text: "To make all data publicly accessible",
      correct: false,
      explanation: "Data quality management is not about making data public."
    },
    {
      text: "To delete all historical data",
      correct: false,
      explanation: "While data cleaning can be part of quality management, it doesn't involve deleting all historical data."
    }
  ]
},
{
  text: "What is the role of AWS Lake Formation in AI data governance?",
  type: "single",
  domain: "Security, Compliance, and Governance for AI Solutions",
  options: [
    {
      text: "To train AI models",
      correct: false,
      explanation: "Lake Formation is not primarily a model training service."
    },
    {
      text: "To simplify data lake creation and security management",
      correct: true,
      explanation: "AWS Lake Formation simplifies the process of setting up a secure data lake, including data discovery, transformation, and fine-grained access control, which is crucial for managing large datasets used in AI."
    },
    {
      text: "To replace all other AWS services",
      correct: false,
      explanation: "Lake Formation complements other AWS services, not replaces them."
    },
    {
      text: "To optimize AI model performance",
      correct: false,
      explanation: "While it can indirectly support AI workflows, Lake Formation is not primarily for model optimization."
    }
  ]
},
];

export const getRandomQuestions = (count) => {
  const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};