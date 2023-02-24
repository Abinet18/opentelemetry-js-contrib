/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Span } from '@opentelemetry/api';
import { InstrumentationConfig } from '@opentelemetry/instrumentation';

export interface DocumentLoadCustomAttributeFunction {
  (span: Span): void;
}

/**
 * DocumentLoadInstrumentationPlugin Config
 */
export interface DocumentLoadInstrumentationConfig
  extends InstrumentationConfig {
  /** Function for adding custom attributes on the document load root span */
  applyCustomAttributesOnDocumentLoadSpan?: DocumentLoadCustomAttributeFunction;
  /** Function for adding custom attributes on the document fetch span */
  applyCustomAttributesOnDocumentFetchSpan?: DocumentLoadCustomAttributeFunction;
  /** Function for adding custom attributes on the resource fetch spans */
  applyCustomAttributesOnResourceFetchSpans?: DocumentLoadCustomAttributeFunction;
}
